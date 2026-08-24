"""Regression checks for the shared FastAPI status endpoints."""
import os
import uuid

import requests


BASE_URL = os.environ["REACT_APP_BACKEND_URL"].rstrip("/")


def test_api_root_is_available():
    response = requests.get(f"{BASE_URL}/api/", timeout=15)
    assert response.status_code == 200
    assert response.json() == {"message": "Hello World"}


def test_status_create_and_list_persistence():
    client_name = f"TEST_portfolio_{uuid.uuid4().hex[:8]}"
    created = requests.post(
        f"{BASE_URL}/api/status", json={"client_name": client_name}, timeout=15
    )
    assert created.status_code == 200
    created_data = created.json()
    assert created_data["client_name"] == client_name
    assert isinstance(created_data["id"], str)

    listed = requests.get(f"{BASE_URL}/api/status", timeout=15)
    assert listed.status_code == 200
    assert any(item["id"] == created_data["id"] and item["client_name"] == client_name for item in listed.json())
import axios from 'axios';
import assert from 'assert';

describe('API Test', () => {
    beforeEach(function () {
        this.timeout(5000);
    });

    it('API test Get Bidang Pendidikan', async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8070/api/pindah');
            assert.strictEqual(response.status, 200);
            console.log('Response Data:', response.data);
        } catch (error) {
            throw error;
        }
    });
});
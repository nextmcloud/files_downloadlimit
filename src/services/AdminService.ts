/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import axios from '@nextcloud/axios'
import { generateOcsUrl } from '@nextcloud/router'

export const setDefaultLimit = async (limit: number): Promise<[]> => {
	const response = await axios.put(generateOcsUrl('/apps/files_downloadlimit/api/v1/limit'), {
		limit,
	})
	return response.data.ocs.data
}

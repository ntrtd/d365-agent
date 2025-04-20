/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { ClmIntegrationContractsApi } from './ClmIntegrationContractsApi';
import { ClmIntegrationContractStatus } from './ClmIntegrationContractStatus';
import { NoYes } from './NoYes';
import { ClmIntegrationContractAccountType } from './ClmIntegrationContractAccountType';

/**
 * This class represents the entity "CLMIntegrationContracts" of service "d365_metadata".
 */
export class ClmIntegrationContracts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ClmIntegrationContractsType<T>
{
  /**
   * Technical entity name for ClmIntegrationContracts.
   */
  static override _entityName = 'CLMIntegrationContracts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ClmIntegrationContracts entity.
   */
  static _keys = ['dataAreaId', 'ContractId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Contract Id.
   */
  declare contractId: DeserializedType<T, 'Edm.String'>;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contract Status.
   * @nullable
   */
  declare contractStatus?: ClmIntegrationContractStatus | null;
  /**
   * Account Relation Id.
   * @nullable
   */
  declare accountRelationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Contract Id.
   * @nullable
   */
  declare externalContractId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Requester Worker Email.
   * @nullable
   */
  declare requesterWorkerEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requester Worker Name.
   * @nullable
   */
  declare requesterWorkerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Latest Amendment Id.
   * @nullable
   */
  declare latestAmendmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amendment In Process.
   * @nullable
   */
  declare amendmentInProcess?: NoYes | null;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Latest External Amendment Id.
   * @nullable
   */
  declare latestExternalAmendmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contract Name.
   * @nullable
   */
  declare contractName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Entity Id.
   * @nullable
   */
  declare legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: ClmIntegrationContractAccountType | null;
  /**
   * Contract Type.
   * @nullable
   */
  declare contractType?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ClmIntegrationContractsApi<T>) {
    super(_entityApi);
  }
}

export interface ClmIntegrationContractsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  contractId: DeserializedType<T, 'Edm.String'>;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  contractStatus?: ClmIntegrationContractStatus | null;
  accountRelationId?: DeserializedType<T, 'Edm.String'> | null;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  externalContractId?: DeserializedType<T, 'Edm.String'> | null;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  requesterWorkerEmail?: DeserializedType<T, 'Edm.String'> | null;
  requesterWorkerName?: DeserializedType<T, 'Edm.String'> | null;
  latestAmendmentId?: DeserializedType<T, 'Edm.String'> | null;
  amendmentInProcess?: NoYes | null;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  latestExternalAmendmentId?: DeserializedType<T, 'Edm.String'> | null;
  contractName?: DeserializedType<T, 'Edm.String'> | null;
  legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  accountType?: ClmIntegrationContractAccountType | null;
  contractType?: DeserializedType<T, 'Edm.String'> | null;
}

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
import type { ProjectContractLineMilestonesApi } from './ProjectContractLineMilestonesApi';
import { ProjTransStatus } from './ProjTransStatus';

/**
 * This class represents the entity "ProjectContractLineMilestones" of service "d365_metadata".
 */
export class ProjectContractLineMilestones<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectContractLineMilestonesType<T>
{
  /**
   * Technical entity name for ProjectContractLineMilestones.
   */
  static override _entityName = 'ProjectContractLineMilestones';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectContractLineMilestones entity.
   */
  static _keys = ['dataAreaId', 'ContractLineMilestoneIdentifier'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Contract Line Milestone Identifier.
   */
  declare contractLineMilestoneIdentifier: DeserializedType<T, 'Edm.String'>;
  /**
   * Activity Number.
   * @nullable
   */
  declare activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Number.
   * @nullable
   */
  declare projectNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contract Line Milestone Guid.
   */
  declare contractLineMilestoneGuid: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Ledger Transaction Date.
   */
  declare ledgerTransactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Sales Amount.
   */
  declare totalSalesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Contract Id.
   * @nullable
   */
  declare projectContractId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Sales Amount.
   */
  declare ledgerSalesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Id.
   * @nullable
   */
  declare transactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Contract Line Milestone Header.
   * @nullable
   */
  declare projectContractLineMilestoneHeader?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Trans Status.
   * @nullable
   */
  declare transStatus?: ProjTransStatus | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Customer Account Number.
   * @nullable
   */
  declare customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contract Line Id.
   * @nullable
   */
  declare contractLineId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProjectContractLineMilestonesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectContractLineMilestonesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  contractLineMilestoneIdentifier: DeserializedType<T, 'Edm.String'>;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  projectNumber?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  contractLineMilestoneGuid: DeserializedType<T, 'Edm.Guid'>;
  ledgerTransactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  totalSalesAmount: DeserializedType<T, 'Edm.Decimal'>;
  projectContractId?: DeserializedType<T, 'Edm.String'> | null;
  ledgerSalesAmount: DeserializedType<T, 'Edm.Decimal'>;
  transactionId?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  projectContractLineMilestoneHeader?: DeserializedType<T, 'Edm.String'> | null;
  transStatus?: ProjTransStatus | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  customerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  contractLineId?: DeserializedType<T, 'Edm.String'> | null;
}

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
import type { ProjectContractLineMilestoneHeadersApi } from './ProjectContractLineMilestoneHeadersApi';
import { ProjProjectMilestoneStatus } from './ProjProjectMilestoneStatus';
import { ProjProjectMilestoneBillingStatus } from './ProjProjectMilestoneBillingStatus';

/**
 * This class represents the entity "ProjectContractLineMilestoneHeaders" of service "d365_metadata".
 */
export class ProjectContractLineMilestoneHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectContractLineMilestoneHeadersType<T>
{
  /**
   * Technical entity name for ProjectContractLineMilestoneHeaders.
   */
  static override _entityName = 'ProjectContractLineMilestoneHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectContractLineMilestoneHeaders entity.
   */
  static _keys = ['dataAreaId', 'ProjectContractLineMilestoneHeaderId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Contract Line Milestone Header Id.
   */
  declare projectContractLineMilestoneHeaderId: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Line Sequence Number.
   */
  declare lineSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Next Invoice Status.
   * @nullable
   */
  declare nextInvoiceStatus?: ProjProjectMilestoneStatus | null;
  /**
   * Task.
   * @nullable
   */
  declare task?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Contract Line.
   * @nullable
   */
  declare projectContractLine?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Status.
   * @nullable
   */
  declare billingStatus?: ProjProjectMilestoneBillingStatus | null;
  /**
   * Project.
   * @nullable
   */
  declare project?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remaining Amount.
   */
  declare remainingAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Next Invoice Amount.
   */
  declare nextInvoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Contract Id.
   * @nullable
   */
  declare projectContractId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Next Invoice Percent.
   */
  declare nextInvoicePercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoiced To Date.
   */
  declare invoicedToDate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Contract Line Milestone Header Guid.
   */
  declare projectContractLineMilestoneHeaderGuid: DeserializedType<
    T,
    'Edm.Guid'
  >;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Percent Invoiced To Date.
   */
  declare percentInvoicedToDate: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: ProjectContractLineMilestoneHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectContractLineMilestoneHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectContractLineMilestoneHeaderId: DeserializedType<T, 'Edm.String'>;
  lineSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  nextInvoiceStatus?: ProjProjectMilestoneStatus | null;
  task?: DeserializedType<T, 'Edm.String'> | null;
  projectContractLine?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  billingStatus?: ProjProjectMilestoneBillingStatus | null;
  project?: DeserializedType<T, 'Edm.String'> | null;
  remainingAmount: DeserializedType<T, 'Edm.Decimal'>;
  nextInvoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  projectContractId?: DeserializedType<T, 'Edm.String'> | null;
  nextInvoicePercent: DeserializedType<T, 'Edm.Decimal'>;
  invoicedToDate: DeserializedType<T, 'Edm.Decimal'>;
  projectContractLineMilestoneHeaderGuid: DeserializedType<T, 'Edm.Guid'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  percentInvoicedToDate: DeserializedType<T, 'Edm.Decimal'>;
}

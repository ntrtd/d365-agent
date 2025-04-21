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
import type { ProjectPostTransViewsApi } from './ProjectPostTransViewsApi';
import { ProjOrigin } from './ProjOrigin';
import { ProjTransType } from './ProjTransType';

/**
 * This class represents the entity "ProjectPostTransViews" of service "d365_metadata".
 */
export class ProjectPostTransViews<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectPostTransViewsType<T>
{
  /**
   * Technical entity name for ProjectPostTransViews.
   */
  static override _entityName = 'ProjectPostTransViews';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectPostTransViews entity.
   */
  static _keys = ['dataAreaId', 'TransactionId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Name.
   * @nullable
   */
  declare vendorName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Account.
   * @nullable
   */
  declare vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Sales Amount.
   */
  declare totalSalesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Property Id.
   * @nullable
   */
  declare linePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Cost Amount.
   */
  declare totalCostAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Origin.
   * @nullable
   */
  declare transactionOrigin?: ProjOrigin | null;
  /**
   * Category Id.
   * @nullable
   */
  declare categoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resource Name.
   * @nullable
   */
  declare resourceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: ProjTransType | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Currency Id.
   * @nullable
   */
  declare currencyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: ProjectPostTransViewsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectPostTransViewsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  vendorName?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  totalSalesAmount: DeserializedType<T, 'Edm.Decimal'>;
  linePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  totalCostAmount: DeserializedType<T, 'Edm.Decimal'>;
  transactionOrigin?: ProjOrigin | null;
  categoryId?: DeserializedType<T, 'Edm.String'> | null;
  resourceName?: DeserializedType<T, 'Edm.String'> | null;
  transactionType?: ProjTransType | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currencyId?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
}

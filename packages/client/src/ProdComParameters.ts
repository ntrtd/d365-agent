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
import type { ProdComParametersApi } from './ProdComParametersApi';
import { NoYes } from './NoYes';
import { InventProdComBranchType } from './InventProdComBranchType';

/**
 * This class represents the entity "ProdComParameters" of service "d365_metadata".
 */
export class ProdComParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProdComParametersType<T>
{
  /**
   * Technical entity name for ProdComParameters.
   */
  static override _entityName = 'ProdComParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProdComParameters entity.
   */
  static _keys = ['dataAreaId', 'ID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Automatic Recalculation.
   * @nullable
   */
  declare automaticRecalculation?: NoYes | null;
  /**
   * External Contact Id.
   * @nullable
   */
  declare externalContactId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Branch Number.
   * @nullable
   */
  declare branchNumber?: InventProdComBranchType | null;
  /**
   * Primary Contact Id.
   * @nullable
   */
  declare primaryContactId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProdComParametersApi<T>) {
    super(_entityApi);
  }
}

export interface ProdComParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  id: DeserializedType<T, 'Edm.Int32'>;
  automaticRecalculation?: NoYes | null;
  externalContactId?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  branchNumber?: InventProdComBranchType | null;
  primaryContactId?: DeserializedType<T, 'Edm.String'> | null;
}

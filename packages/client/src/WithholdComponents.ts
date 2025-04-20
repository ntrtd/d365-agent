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
import type { WithholdComponentsApi } from './WithholdComponentsApi';
import { TaxWithholdTypeIn } from './TaxWithholdTypeIn';

/**
 * This class represents the entity "WithholdComponents" of service "d365_metadata".
 */
export class WithholdComponents<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WithholdComponentsType<T>
{
  /**
   * Technical entity name for WithholdComponents.
   */
  static override _entityName = 'WithholdComponents';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WithholdComponents entity.
   */
  static _keys = ['dataAreaId', 'TaxType', 'WithholingTaxComponent'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Type.
   * @nullable
   */
  declare taxType?: TaxWithholdTypeIn | null;
  /**
   * Withholing Tax Component.
   */
  declare withholingTaxComponent: DeserializedType<T, 'Edm.String'>;
  /**
   * Withholding Tax Component Group.
   * @nullable
   */
  declare withholdingTaxComponentGroup?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WithholdComponentsApi<T>) {
    super(_entityApi);
  }
}

export interface WithholdComponentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxType?: TaxWithholdTypeIn | null;
  withholingTaxComponent: DeserializedType<T, 'Edm.String'>;
  withholdingTaxComponentGroup?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}

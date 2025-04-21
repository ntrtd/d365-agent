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
import type { WithholdComponentGroupsApi } from './WithholdComponentGroupsApi';
import { TaxWithholdTypeIn } from './TaxWithholdTypeIn';
import { TaxWithholdComponentStatusIn } from './TaxWithholdComponentStatusIn';

/**
 * This class represents the entity "WithholdComponentGroups" of service "d365_metadata".
 */
export class WithholdComponentGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WithholdComponentGroupsType<T>
{
  /**
   * Technical entity name for WithholdComponentGroups.
   */
  static override _entityName = 'WithholdComponentGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WithholdComponentGroups entity.
   */
  static _keys = ['dataAreaId', 'TaxType', 'WithholdingTaxComponentGroup'];
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
   * Withholding Tax Component Group.
   */
  declare withholdingTaxComponentGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: TaxWithholdComponentStatusIn | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Section Code.
   * @nullable
   */
  declare sectionCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WithholdComponentGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface WithholdComponentGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxType?: TaxWithholdTypeIn | null;
  withholdingTaxComponentGroup: DeserializedType<T, 'Edm.String'>;
  status?: TaxWithholdComponentStatusIn | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  sectionCode?: DeserializedType<T, 'Edm.String'> | null;
}

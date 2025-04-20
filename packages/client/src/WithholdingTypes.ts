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
import type { WithholdingTypesApi } from './WithholdingTypesApi';
import { CfdiWithholdingComplementTypeMx } from './CfdiWithholdingComplementTypeMx';

/**
 * This class represents the entity "WithholdingTypes" of service "d365_metadata".
 */
export class WithholdingTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WithholdingTypesType<T>
{
  /**
   * Technical entity name for WithholdingTypes.
   */
  static override _entityName = 'WithholdingTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WithholdingTypes entity.
   */
  static _keys = ['dataAreaId', 'Code'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Code.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * Complement Type.
   * @nullable
   */
  declare complementType?: CfdiWithholdingComplementTypeMx | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: WithholdingTypesApi<T>) {
    super(_entityApi);
  }
}

export interface WithholdingTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  code: DeserializedType<T, 'Edm.String'>;
  complementType?: CfdiWithholdingComplementTypeMx | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}

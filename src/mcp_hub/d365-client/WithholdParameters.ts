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
import type { WithholdParametersApi } from './WithholdParametersApi';
import { TaxWithholdCheckWhtGroups } from './TaxWithholdCheckWhtGroups';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "WithholdParameters" of service "d365_metadata".
 */
export class WithholdParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WithholdParametersType<T>
{
  /**
   * Technical entity name for WithholdParameters.
   */
  static override _entityName = 'WithholdParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WithholdParameters entity.
   */
  static _keys = ['dataAreaId', 'Key'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Check Intersection.
   * @nullable
   */
  declare checkIntersection?: TaxWithholdCheckWhtGroups | null;
  /**
   * Enable Calc Wht In Invoice.
   * @nullable
   */
  declare enableCalcWhtInInvoice?: NoYes | null;

  constructor(_entityApi: WithholdParametersApi<T>) {
    super(_entityApi);
  }
}

export interface WithholdParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  key: DeserializedType<T, 'Edm.Int32'>;
  checkIntersection?: TaxWithholdCheckWhtGroups | null;
  enableCalcWhtInInvoice?: NoYes | null;
}

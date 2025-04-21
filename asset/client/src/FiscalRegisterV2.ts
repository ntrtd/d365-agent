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
import type { FiscalRegisterV2Api } from './FiscalRegisterV2Api';
import { NoYes } from './NoYes';
import { LtmValidationTypeMask } from './LtmValidationTypeMask';
import { LtmVerifyMethod } from './LtmVerifyMethod';

/**
 * This class represents the entity "FiscalRegisterV2" of service "d365_metadata".
 */
export class FiscalRegisterV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FiscalRegisterV2Type<T>
{
  /**
   * Technical entity name for FiscalRegisterV2.
   */
  static override _entityName = 'FiscalRegisterV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalRegisterV2 entity.
   */
  static _keys = ['dataAreaId', 'DocTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Doc Type Id.
   */
  declare docTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Foreign Doc Type.
   * @nullable
   */
  declare foreignDocType?: NoYes | null;
  /**
   * Country Doc Type.
   * @nullable
   */
  declare countryDocType?: NoYes | null;
  /**
   * Msk Length.
   */
  declare mskLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Doc Type Description.
   * @nullable
   */
  declare docTypeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State Doc Type.
   * @nullable
   */
  declare stateDocType?: NoYes | null;
  /**
   * Validation Type Mask.
   * @nullable
   */
  declare validationTypeMask?: LtmValidationTypeMask | null;
  /**
   * Mask.
   * @nullable
   */
  declare mask?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Verify Method.
   * @nullable
   */
  declare verifyMethod?: LtmVerifyMethod | null;

  constructor(_entityApi: FiscalRegisterV2Api<T>) {
    super(_entityApi);
  }
}

export interface FiscalRegisterV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  docTypeId: DeserializedType<T, 'Edm.String'>;
  foreignDocType?: NoYes | null;
  countryDocType?: NoYes | null;
  mskLength: DeserializedType<T, 'Edm.Int32'>;
  docTypeDescription?: DeserializedType<T, 'Edm.String'> | null;
  stateDocType?: NoYes | null;
  validationTypeMask?: LtmValidationTypeMask | null;
  mask?: DeserializedType<T, 'Edm.String'> | null;
  verifyMethod?: LtmVerifyMethod | null;
}

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
import type { TrvExpMobileCompanyInfoApi } from './TrvExpMobileCompanyInfoApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "TrvExpMobileCompanyInfo" of service "d365_metadata".
 */
export class TrvExpMobileCompanyInfo<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TrvExpMobileCompanyInfoType<T>
{
  /**
   * Technical entity name for TrvExpMobileCompanyInfo.
   */
  static override _entityName = 'TrvExpMobileCompanyInfo';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TrvExpMobileCompanyInfo entity.
   */
  static _keys = ['PartyID'];
  /**
   * Party Id.
   */
  declare partyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intercompany L Es.
   * @nullable
   */
  declare intercompanyLEs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Employed.
   * @nullable
   */
  declare isEmployed?: NoYes | null;
  /**
   * Language.
   * @nullable
   */
  declare language?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Currency.
   * @nullable
   */
  declare defaultCurrency?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TrvExpMobileCompanyInfoApi<T>) {
    super(_entityApi);
  }
}

export interface TrvExpMobileCompanyInfoType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  intercompanyLEs?: DeserializedType<T, 'Edm.String'> | null;
  isEmployed?: NoYes | null;
  language?: DeserializedType<T, 'Edm.String'> | null;
  defaultCurrency?: DeserializedType<T, 'Edm.String'> | null;
}

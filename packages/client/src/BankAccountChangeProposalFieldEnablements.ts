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
import type { BankAccountChangeProposalFieldEnablementsApi } from './BankAccountChangeProposalFieldEnablementsApi';
import { VendBankAccountChangeProposalFields } from './VendBankAccountChangeProposalFields';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "BankAccountChangeProposalFieldEnablements" of service "d365_metadata".
 */
export class BankAccountChangeProposalFieldEnablements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BankAccountChangeProposalFieldEnablementsType<T>
{
  /**
   * Technical entity name for BankAccountChangeProposalFieldEnablements.
   */
  static override _entityName = 'BankAccountChangeProposalFieldEnablements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BankAccountChangeProposalFieldEnablements entity.
   */
  static _keys = ['dataAreaId', 'Field'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Field.
   * @nullable
   */
  declare field?: VendBankAccountChangeProposalFields | null;
  /**
   * Is Enabled.
   * @nullable
   */
  declare isEnabled?: NoYes | null;

  constructor(_entityApi: BankAccountChangeProposalFieldEnablementsApi<T>) {
    super(_entityApi);
  }
}

export interface BankAccountChangeProposalFieldEnablementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  field?: VendBankAccountChangeProposalFields | null;
  isEnabled?: NoYes | null;
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BankAccountChangeProposalFieldEnablements } from './BankAccountChangeProposalFieldEnablements';
import { BankAccountChangeProposalFieldEnablementsRequestBuilder } from './BankAccountChangeProposalFieldEnablementsRequestBuilder';
import { VendBankAccountChangeProposalFields } from './VendBankAccountChangeProposalFields';
import { NoYes } from './NoYes';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class BankAccountChangeProposalFieldEnablementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      BankAccountChangeProposalFieldEnablements<DeSerializersT>,
      DeSerializersT
    >
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): BankAccountChangeProposalFieldEnablementsApi<DeSerializersT> {
    return new BankAccountChangeProposalFieldEnablementsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BankAccountChangeProposalFieldEnablements;

  requestBuilder(): BankAccountChangeProposalFieldEnablementsRequestBuilder<DeSerializersT> {
    return new BankAccountChangeProposalFieldEnablementsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BankAccountChangeProposalFieldEnablements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BankAccountChangeProposalFieldEnablements<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BankAccountChangeProposalFieldEnablements<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof BankAccountChangeProposalFieldEnablements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BankAccountChangeProposalFieldEnablements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BankAccountChangeProposalFieldEnablements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIELD: EnumField<
      BankAccountChangeProposalFieldEnablements<DeSerializers>,
      DeSerializersT,
      VendBankAccountChangeProposalFields,
      true,
      true
    >;
    IS_ENABLED: EnumField<
      BankAccountChangeProposalFieldEnablements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      BankAccountChangeProposalFieldEnablements<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link field} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD: fieldBuilder.buildEnumField(
          'Field',
          VendBankAccountChangeProposalFields,
          true
        ),
        /**
         * Static representation of the {@link isEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ENABLED: fieldBuilder.buildEnumField('IsEnabled', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          BankAccountChangeProposalFieldEnablements
        )
      };
    }

    return this._schema;
  }
}

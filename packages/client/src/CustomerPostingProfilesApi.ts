/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerPostingProfiles } from './CustomerPostingProfiles';
import { CustomerPostingProfilesRequestBuilder } from './CustomerPostingProfilesRequestBuilder';
import { CustomerPostingProfileLinesApi } from './CustomerPostingProfileLinesApi';
import { NoYes } from './NoYes';
import { DimSettlementCtrlTypeRu } from './DimSettlementCtrlTypeRu';
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
  EnumField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class CustomerPostingProfilesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustomerPostingProfiles<DeSerializersT>, DeSerializersT>
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
  ): CustomerPostingProfilesApi<DeSerializersT> {
    return new CustomerPostingProfilesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link custCustomerPostingProfileHead} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_CUSTOMER_POSTING_PROFILE_HEAD: OneToManyLink<
      CustomerPostingProfiles<DeSerializersT>,
      DeSerializersT,
      CustomerPostingProfileLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [CustomerPostingProfileLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CUST_CUSTOMER_POSTING_PROFILE_HEAD: new OneToManyLink(
        'CustCustomerPostingProfileHead',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = CustomerPostingProfiles;

  requestBuilder(): CustomerPostingProfilesRequestBuilder<DeSerializersT> {
    return new CustomerPostingProfilesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomerPostingProfiles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustomerPostingProfiles<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomerPostingProfiles<DeSerializersT>,
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
    typeof CustomerPostingProfiles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerPostingProfiles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustomerPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      CustomerPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSTING_PROFILE_TO_CLOSE_SETTLEMENT: OrderableEdmTypeField<
      CustomerPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CustomerPostingProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_TRANSACTION_INCLUDED_IN_AUTO_SETTLEMENT: EnumField<
      CustomerPostingProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_TRANSACTION_INCLUDED_IN_COLLECTION_LETTER_GENERATION: EnumField<
      CustomerPostingProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_TRANSACTION_INCLUDED_IN_INTEREST_CALCULATION: EnumField<
      CustomerPostingProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_EMPTY_DIMENSION_VALUE: EnumField<
      CustomerPostingProfiles<DeSerializers>,
      DeSerializersT,
      DimSettlementCtrlTypeRu,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link custCustomerPostingProfileHead} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUST_CUSTOMER_POSTING_PROFILE_HEAD: OneToManyLink<
      CustomerPostingProfiles<DeSerializersT>,
      DeSerializersT,
      CustomerPostingProfileLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CustomerPostingProfiles<DeSerializers>>;
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
         * Static representation of the {@link postingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PostingProfile',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link postingProfileToCloseSettlement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_TO_CLOSE_SETTLEMENT: fieldBuilder.buildEdmTypeField(
          'PostingProfileToCloseSettlement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isTransactionIncludedInAutoSettlement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TRANSACTION_INCLUDED_IN_AUTO_SETTLEMENT: fieldBuilder.buildEnumField(
          'IsTransactionIncludedInAutoSettlement',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isTransactionIncludedInCollectionLetterGeneration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TRANSACTION_INCLUDED_IN_COLLECTION_LETTER_GENERATION:
          fieldBuilder.buildEnumField(
            'IsTransactionIncludedInCollectionLetterGeneration',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isTransactionIncludedInInterestCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TRANSACTION_INCLUDED_IN_INTEREST_CALCULATION:
          fieldBuilder.buildEnumField(
            'IsTransactionIncludedInInterestCalculation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link allowEmptyDimensionValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_EMPTY_DIMENSION_VALUE: fieldBuilder.buildEnumField(
          'AllowEmptyDimensionValue',
          DimSettlementCtrlTypeRu,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomerPostingProfiles)
      };
    }

    return this._schema;
  }
}

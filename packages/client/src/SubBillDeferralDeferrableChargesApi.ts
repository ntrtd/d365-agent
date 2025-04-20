/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillDeferralDeferrableCharges } from './SubBillDeferralDeferrableCharges';
import { SubBillDeferralDeferrableChargesRequestBuilder } from './SubBillDeferralDeferrableChargesRequestBuilder';
import { SubBillDeferralTransactionType } from './SubBillDeferralTransactionType';
import { SubBillDeferralChargePostingCode } from './SubBillDeferralChargePostingCode';
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
export class SubBillDeferralDeferrableChargesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillDeferralDeferrableCharges<DeSerializersT>, DeSerializersT>
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
  ): SubBillDeferralDeferrableChargesApi<DeSerializersT> {
    return new SubBillDeferralDeferrableChargesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillDeferralDeferrableCharges;

  requestBuilder(): SubBillDeferralDeferrableChargesRequestBuilder<DeSerializersT> {
    return new SubBillDeferralDeferrableChargesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubBillDeferralDeferrableCharges<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillDeferralDeferrableCharges<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillDeferralDeferrableCharges<DeSerializersT>,
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
    typeof SubBillDeferralDeferrableCharges,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillDeferralDeferrableCharges,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillDeferralDeferrableCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUB_BILL_DEFERRAL_TRANSACTION_TYPE: EnumField<
      SubBillDeferralDeferrableCharges<DeSerializers>,
      DeSerializersT,
      SubBillDeferralTransactionType,
      true,
      true
    >;
    SUB_BILL_DEFERRAL_CHARGE_CODE: EnumField<
      SubBillDeferralDeferrableCharges<DeSerializers>,
      DeSerializersT,
      SubBillDeferralChargePostingCode,
      true,
      true
    >;
    SUB_BILL_DEFERRAL_MARKUP_CODE_RELATION: OrderableEdmTypeField<
      SubBillDeferralDeferrableCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SubBillDeferralDeferrableCharges<DeSerializers>>;
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
         * Static representation of the {@link subBillDeferralTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'SubBillDeferralTransactionType',
          SubBillDeferralTransactionType,
          true
        ),
        /**
         * Static representation of the {@link subBillDeferralChargeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_CHARGE_CODE: fieldBuilder.buildEnumField(
          'SubBillDeferralChargeCode',
          SubBillDeferralChargePostingCode,
          true
        ),
        /**
         * Static representation of the {@link subBillDeferralMarkupCodeRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_MARKUP_CODE_RELATION: fieldBuilder.buildEdmTypeField(
          'SubBillDeferralMarkupCodeRelation',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillDeferralDeferrableCharges)
      };
    }

    return this._schema;
  }
}

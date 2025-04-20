/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerRebateReductionPrinciples } from './CustomerRebateReductionPrinciples';
import { CustomerRebateReductionPrinciplesRequestBuilder } from './CustomerRebateReductionPrinciplesRequestBuilder';
import { RebateAndDeductionAgreementHeadersApi } from './RebateAndDeductionAgreementHeadersApi';
import { NoYes } from './NoYes';
import { TamRebateReductionBasis } from './TamRebateReductionBasis';
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
export class CustomerRebateReductionPrinciplesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CustomerRebateReductionPrinciples<DeSerializersT>, DeSerializersT>
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
  ): CustomerRebateReductionPrinciplesApi<DeSerializersT> {
    return new CustomerRebateReductionPrinciplesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      CustomerRebateReductionPrinciples<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RebateAndDeductionAgreementHeadersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: new OneToManyLink(
        'RebateAndDeductionsAgreementHeaders',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = CustomerRebateReductionPrinciples;

  requestBuilder(): CustomerRebateReductionPrinciplesRequestBuilder<DeSerializersT> {
    return new CustomerRebateReductionPrinciplesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CustomerRebateReductionPrinciples<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustomerRebateReductionPrinciples<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomerRebateReductionPrinciples<DeSerializersT>,
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
    typeof CustomerRebateReductionPrinciples,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerRebateReductionPrinciples,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRINCIPLE_ID: OrderableEdmTypeField<
      CustomerRebateReductionPrinciples<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRINCIPLE_DESCRIPTION: OrderableEdmTypeField<
      CustomerRebateReductionPrinciples<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_REDUCTION_EXCLUDING_REBATE: EnumField<
      CustomerRebateReductionPrinciples<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REBATE_CALCULATION_REDUCTION_BASIS: EnumField<
      CustomerRebateReductionPrinciples<DeSerializers>,
      DeSerializersT,
      TamRebateReductionBasis,
      true,
      true
    >;
    IS_REDUCTION_APPLYING_REBATE: EnumField<
      CustomerRebateReductionPrinciples<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      CustomerRebateReductionPrinciples<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CustomerRebateReductionPrinciples<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link principleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINCIPLE_ID: fieldBuilder.buildEdmTypeField(
          'PrincipleId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link principleDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINCIPLE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrincipleDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isReductionExcludingRebate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REDUCTION_EXCLUDING_REBATE: fieldBuilder.buildEnumField(
          'IsReductionExcludingRebate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link rebateCalculationReductionBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_CALCULATION_REDUCTION_BASIS: fieldBuilder.buildEnumField(
          'RebateCalculationReductionBasis',
          TamRebateReductionBasis,
          true
        ),
        /**
         * Static representation of the {@link isReductionApplyingRebate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REDUCTION_APPLYING_REBATE: fieldBuilder.buildEnumField(
          'IsReductionApplyingRebate',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomerRebateReductionPrinciples)
      };
    }

    return this._schema;
  }
}

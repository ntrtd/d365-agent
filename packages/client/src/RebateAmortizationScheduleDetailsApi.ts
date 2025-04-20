/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RebateAmortizationScheduleDetails } from './RebateAmortizationScheduleDetails';
import { RebateAmortizationScheduleDetailsRequestBuilder } from './RebateAmortizationScheduleDetailsRequestBuilder';
import { TamRebateMethod } from './TamRebateMethod';
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
export class RebateAmortizationScheduleDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RebateAmortizationScheduleDetails<DeSerializersT>, DeSerializersT>
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
  ): RebateAmortizationScheduleDetailsApi<DeSerializersT> {
    return new RebateAmortizationScheduleDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RebateAmortizationScheduleDetails;

  requestBuilder(): RebateAmortizationScheduleDetailsRequestBuilder<DeSerializersT> {
    return new RebateAmortizationScheduleDetailsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RebateAmortizationScheduleDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RebateAmortizationScheduleDetails<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RebateAmortizationScheduleDetails<DeSerializersT>,
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
    typeof RebateAmortizationScheduleDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RebateAmortizationScheduleDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERIOD_NUMBER: OrderableEdmTypeField<
      RebateAmortizationScheduleDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAM_REBATE_LINE_REBATE_ID: OrderableEdmTypeField<
      RebateAmortizationScheduleDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAM_REBATE_LINE_REF_LINE_NUM: OrderableEdmTypeField<
      RebateAmortizationScheduleDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAM_REBATE_LINE_REBATE_FROM: OrderableEdmTypeField<
      RebateAmortizationScheduleDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAM_REBATE_LINE_REBATE_LIMIT: OrderableEdmTypeField<
      RebateAmortizationScheduleDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAM_REBATE_LINE_REBATE_AMOUNT: OrderableEdmTypeField<
      RebateAmortizationScheduleDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAM_REBATE_LINE_REBATE_METHOD: EnumField<
      RebateAmortizationScheduleDetails<DeSerializers>,
      DeSerializersT,
      TamRebateMethod,
      true,
      true
    >;
    RECOGNIZE_AMOUNT: OrderableEdmTypeField<
      RebateAmortizationScheduleDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RebateAmortizationScheduleDetails<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link periodNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_NUMBER: fieldBuilder.buildEdmTypeField(
          'PeriodNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link tamRebateLineRebateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAM_REBATE_LINE_REBATE_ID: fieldBuilder.buildEdmTypeField(
          'TAMRebateLine_RebateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link tamRebateLineRefLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAM_REBATE_LINE_REF_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'TAMRebateLine_RefLineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tamRebateLineRebateFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAM_REBATE_LINE_REBATE_FROM: fieldBuilder.buildEdmTypeField(
          'TAMRebateLine_RebateFrom',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tamRebateLineRebateLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAM_REBATE_LINE_REBATE_LIMIT: fieldBuilder.buildEdmTypeField(
          'TAMRebateLine_RebateLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tamRebateLineRebateAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAM_REBATE_LINE_REBATE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TAMRebateLine_RebateAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tamRebateLineRebateMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAM_REBATE_LINE_REBATE_METHOD: fieldBuilder.buildEnumField(
          'TAMRebateLine_RebateMethod',
          TamRebateMethod,
          true
        ),
        /**
         * Static representation of the {@link recognizeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNIZE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RecognizeAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RebateAmortizationScheduleDetails)
      };
    }

    return this._schema;
  }
}

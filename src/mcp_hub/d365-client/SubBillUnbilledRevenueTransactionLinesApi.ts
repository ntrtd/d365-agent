/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillUnbilledRevenueTransactionLines } from './SubBillUnbilledRevenueTransactionLines';
import { SubBillUnbilledRevenueTransactionLinesRequestBuilder } from './SubBillUnbilledRevenueTransactionLinesRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class SubBillUnbilledRevenueTransactionLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      SubBillUnbilledRevenueTransactionLines<DeSerializersT>,
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
  ): SubBillUnbilledRevenueTransactionLinesApi<DeSerializersT> {
    return new SubBillUnbilledRevenueTransactionLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link unbilledDiscountAccountIdCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNBILLED_DISCOUNT_ACCOUNT_ID_COMBINATION: OneToOneLink<
      SubBillUnbilledRevenueTransactionLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unbilledRevenueAccountIdCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNBILLED_REVENUE_ACCOUNT_ID_COMBINATION: OneToOneLink<
      SubBillUnbilledRevenueTransactionLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      UNBILLED_DISCOUNT_ACCOUNT_ID_COMBINATION: new OneToOneLink(
        'UnbilledDiscountAccountIdCombination',
        this,
        linkedApis[0]
      ),
      UNBILLED_REVENUE_ACCOUNT_ID_COMBINATION: new OneToOneLink(
        'UnbilledRevenueAccountIdCombination',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = SubBillUnbilledRevenueTransactionLines;

  requestBuilder(): SubBillUnbilledRevenueTransactionLinesRequestBuilder<DeSerializersT> {
    return new SubBillUnbilledRevenueTransactionLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubBillUnbilledRevenueTransactionLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillUnbilledRevenueTransactionLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillUnbilledRevenueTransactionLines<DeSerializersT>,
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
    typeof SubBillUnbilledRevenueTransactionLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillUnbilledRevenueTransactionLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillUnbilledRevenueTransactionLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCHEDULE_NUMBER: OrderableEdmTypeField<
      SubBillUnbilledRevenueTransactionLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      SubBillUnbilledRevenueTransactionLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNBILLED_SHORT_TERM_DISCOUNT_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      SubBillUnbilledRevenueTransactionLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNBILLED_DISCOUNT_ACCOUNT: OrderableEdmTypeField<
      SubBillUnbilledRevenueTransactionLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNBILLED_SHORT_TERM_REVENUE_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      SubBillUnbilledRevenueTransactionLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNBILLED_DEFERRED_DISCOUNT_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      SubBillUnbilledRevenueTransactionLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNBILLED_DISCOUNT_OFFSET_ACCOUNT: OrderableEdmTypeField<
      SubBillUnbilledRevenueTransactionLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNBILLED_REVENUE: EnumField<
      SubBillUnbilledRevenueTransactionLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    UNBILLED_REVENUE_ACCOUNT: OrderableEdmTypeField<
      SubBillUnbilledRevenueTransactionLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNBILLED_REVENUE_OFFSET_ACCOUNT: OrderableEdmTypeField<
      SubBillUnbilledRevenueTransactionLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unbilledDiscountAccountIdCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNBILLED_DISCOUNT_ACCOUNT_ID_COMBINATION: OneToOneLink<
      SubBillUnbilledRevenueTransactionLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unbilledRevenueAccountIdCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNBILLED_REVENUE_ACCOUNT_ID_COMBINATION: OneToOneLink<
      SubBillUnbilledRevenueTransactionLines<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      SubBillUnbilledRevenueTransactionLines<DeSerializers>
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
         * Static representation of the {@link scheduleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ScheduleNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unbilledShortTermDiscountAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNBILLED_SHORT_TERM_DISCOUNT_ACCOUNT_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'UnbilledShortTermDiscountAccountDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link unbilledDiscountAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNBILLED_DISCOUNT_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'UnbilledDiscountAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unbilledShortTermRevenueAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNBILLED_SHORT_TERM_REVENUE_ACCOUNT_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'UnbilledShortTermRevenueAccountDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link unbilledDeferredDiscountAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNBILLED_DEFERRED_DISCOUNT_ACCOUNT_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'UnbilledDeferredDiscountAccountDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link unbilledDiscountOffsetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNBILLED_DISCOUNT_OFFSET_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'UnbilledDiscountOffsetAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unbilledRevenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNBILLED_REVENUE: fieldBuilder.buildEnumField(
          'UnbilledRevenue',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link unbilledRevenueAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNBILLED_REVENUE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'UnbilledRevenueAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unbilledRevenueOffsetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNBILLED_REVENUE_OFFSET_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'UnbilledRevenueOffsetAccount',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillUnbilledRevenueTransactionLines)
      };
    }

    return this._schema;
  }
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventTransArchiveEntities } from './InventTransArchiveEntities';
import { InventTransArchiveEntitiesRequestBuilder } from './InventTransArchiveEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { InventTransChildType } from './InventTransChildType';
import { StatusIssue } from './StatusIssue';
import { InventTransGroupRefTypeRu } from './InventTransGroupRefTypeRu';
import { StatusReceipt } from './StatusReceipt';
import { InventTransOpen } from './InventTransOpen';
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
export class InventTransArchiveEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InventTransArchiveEntities<DeSerializersT>, DeSerializersT>
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
  ): InventTransArchiveEntitiesApi<DeSerializersT> {
    return new InventTransArchiveEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InventTransArchiveEntities;

  requestBuilder(): InventTransArchiveEntitiesRequestBuilder<DeSerializersT> {
    return new InventTransArchiveEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InventTransArchiveEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventTransArchiveEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventTransArchiveEntities<DeSerializersT>,
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
    typeof InventTransArchiveEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventTransArchiveEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENT_TRANS: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    QTY: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_TRANS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_AMOUNT_ADJUSTMENT: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PDS_CW_SETTLED: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MARKING_REF_INVENT_TRANS_ORIGIN: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COST_AMOUNT_SEC_CUR_PHYSICAL_RU: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STORNO_PHYSICAL_RU: EnumField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DATE_STATUS: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COST_AMOUNT_POSTED: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURN_INVENT_TRANS_ORIGIN: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    QTY_SETTLED: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIPT_ID: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_AMOUNT_PHYSICAL: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_FINANCIAL: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COST_AMOUNT_SETTLED_SEC_CUR_RU: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PICKING_ROUTE_ID: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_CHILD_REF_ID: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_AMOUNT_SEC_CUR_POSTED_RU: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIPPING_DATE_REQUESTED: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVENT_DIM_ID_SALES_RU: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROUP_REF_ID_RU: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_TRANS_ORIGIN_DELIVERY_RU: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DATE_CLOSED_SEC_CUR_RU: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANS_CHILD_TYPE: EnumField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      InventTransChildType,
      true,
      true
    >;
    PDS_CW_QTY: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COST_AMOUNT_STD_SEC_CUR_RU: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOAD_ID: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_EXPECTED: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DATE_EXPECTED: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PACKING_SLIP_ID: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_AMOUNT_OPERATIONS: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATUS_ISSUE: EnumField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      StatusIssue,
      true,
      true
    >;
    DATE_CLOSED: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PACKING_SLIP_RETURNED: EnumField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DATE_INVENT: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJ_ADJUST_REF_ID: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_CATEGORY_ID: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROUP_REF_TYPE_RU: EnumField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      InventTransGroupRefTypeRu,
      true,
      true
    >;
    COST_AMOUNT_SEC_CUR_ADJUSTMENT_RU: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATUS_RECEIPT: EnumField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      StatusReceipt,
      true,
      true
    >;
    COST_AMOUNT_STD: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NON_FINANCIAL_TRANSFER_INVENT_CLOSING: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DATE_PHYSICAL: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIM_FIXED: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_TRANS_ORIGIN_TRANSIT_RU: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    STORNO_RU: EnumField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTER_COMPANY_INVENT_DIM_TRANSFERRED: EnumField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIPPING_DATE_CONFIRMED: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REVENUE_AMOUNT_PHYSICAL: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VOUCHER_PHYSICAL: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE_OPEN: EnumField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      InventTransOpen,
      true,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_AMOUNT_SETTLED: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QTY_SETTLED_SEC_CUR_RU: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_DIM_ID: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SESSION_ID: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE_OPEN_SEC_CUR_RU: EnumField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      InventTransOpen,
      true,
      true
    >;
    TAX_AMOUNT_PHYSICAL: OrderableEdmTypeField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_RETURNED: EnumField<
      InventTransArchiveEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<InventTransArchiveEntities<DeSerializers>>;
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
         * Static representation of the {@link inventTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS: fieldBuilder.buildEdmTypeField(
          'InventTrans',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link qty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY: fieldBuilder.buildEdmTypeField('Qty', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link inventTransModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'InventTransModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
        /**
         * Static representation of the {@link costAmountAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT_ADJUSTMENT: fieldBuilder.buildEdmTypeField(
          'CostAmountAdjustment',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link pdsCwSettled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_SETTLED: fieldBuilder.buildEdmTypeField(
          'PdsCWSettled',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link markingRefInventTransOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKING_REF_INVENT_TRANS_ORIGIN: fieldBuilder.buildEdmTypeField(
          'MarkingRefInventTransOrigin',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link costAmountSecCurPhysicalRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT_SEC_CUR_PHYSICAL_RU: fieldBuilder.buildEdmTypeField(
          'CostAmountSecCurPhysical_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link stornoPhysicalRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORNO_PHYSICAL_RU: fieldBuilder.buildEnumField(
          'StornoPhysical_RU',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dateStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_STATUS: fieldBuilder.buildEdmTypeField(
          'DateStatus',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link costAmountPosted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT_POSTED: fieldBuilder.buildEdmTypeField(
          'CostAmountPosted',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link returnInventTransOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_INVENT_TRANS_ORIGIN: fieldBuilder.buildEdmTypeField(
          'ReturnInventTransOrigin',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link qtySettled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY_SETTLED: fieldBuilder.buildEdmTypeField(
          'QtySettled',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link receiptId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_ID: fieldBuilder.buildEdmTypeField(
          'ReceiptId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costAmountPhysical} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT_PHYSICAL: fieldBuilder.buildEdmTypeField(
          'CostAmountPhysical',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link activityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ActivityNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateFinancial} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_FINANCIAL: fieldBuilder.buildEdmTypeField(
          'DateFinancial',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link costAmountSettledSecCurRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT_SETTLED_SEC_CUR_RU: fieldBuilder.buildEdmTypeField(
          'CostAmountSettledSecCur_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link pickingRouteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKING_ROUTE_ID: fieldBuilder.buildEdmTypeField(
          'PickingRouteID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transChildRefId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_CHILD_REF_ID: fieldBuilder.buildEdmTypeField(
          'TransChildRefId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costAmountSecCurPostedRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT_SEC_CUR_POSTED_RU: fieldBuilder.buildEdmTypeField(
          'CostAmountSecCurPosted_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shippingDateRequested} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_DATE_REQUESTED: fieldBuilder.buildEdmTypeField(
          'ShippingDateRequested',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link inventDimIdSalesRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIM_ID_SALES_RU: fieldBuilder.buildEdmTypeField(
          'InventDimIdSales_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link groupRefIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_REF_ID_RU: fieldBuilder.buildEdmTypeField(
          'GroupRefId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventTransOriginDeliveryRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS_ORIGIN_DELIVERY_RU: fieldBuilder.buildEdmTypeField(
          'InventTransOriginDelivery_RU',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link dateClosedSecCurRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_CLOSED_SEC_CUR_RU: fieldBuilder.buildEdmTypeField(
          'DateClosedSecCur_RU',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link transChildType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_CHILD_TYPE: fieldBuilder.buildEnumField(
          'TransChildType',
          InventTransChildType,
          true
        ),
        /**
         * Static representation of the {@link pdsCwQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PDS_CW_QTY: fieldBuilder.buildEdmTypeField(
          'PdsCWQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link costAmountStdSecCurRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT_STD_SEC_CUR_RU: fieldBuilder.buildEdmTypeField(
          'CostAmountStdSecCur_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link loadId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_ID: fieldBuilder.buildEdmTypeField('LoadId', 'Edm.String', true),
        /**
         * Static representation of the {@link timeExpected} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_EXPECTED: fieldBuilder.buildEdmTypeField(
          'TimeExpected',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link dateExpected} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_EXPECTED: fieldBuilder.buildEdmTypeField(
          'DateExpected',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link packingSlipId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_SLIP_ID: fieldBuilder.buildEdmTypeField(
          'PackingSlipId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costAmountOperations} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT_OPERATIONS: fieldBuilder.buildEdmTypeField(
          'CostAmountOperations',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link statusIssue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS_ISSUE: fieldBuilder.buildEnumField(
          'StatusIssue',
          StatusIssue,
          true
        ),
        /**
         * Static representation of the {@link dateClosed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_CLOSED: fieldBuilder.buildEdmTypeField(
          'DateClosed',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link packingSlipReturned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_SLIP_RETURNED: fieldBuilder.buildEnumField(
          'PackingSlipReturned',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dateInvent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_INVENT: fieldBuilder.buildEdmTypeField(
          'DateInvent',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projAdjustRefId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ADJUST_REF_ID: fieldBuilder.buildEdmTypeField(
          'ProjAdjustRefId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProjCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link groupRefTypeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_REF_TYPE_RU: fieldBuilder.buildEnumField(
          'GroupRefType_RU',
          InventTransGroupRefTypeRu,
          true
        ),
        /**
         * Static representation of the {@link costAmountSecCurAdjustmentRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT_SEC_CUR_ADJUSTMENT_RU: fieldBuilder.buildEdmTypeField(
          'CostAmountSecCurAdjustment_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link statusReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS_RECEIPT: fieldBuilder.buildEnumField(
          'StatusReceipt',
          StatusReceipt,
          true
        ),
        /**
         * Static representation of the {@link costAmountStd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT_STD: fieldBuilder.buildEdmTypeField(
          'CostAmountStd',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link nonFinancialTransferInventClosing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_FINANCIAL_TRANSFER_INVENT_CLOSING: fieldBuilder.buildEdmTypeField(
          'NonFinancialTransferInventClosing',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link datePhysical} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_PHYSICAL: fieldBuilder.buildEdmTypeField(
          'DatePhysical',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link invoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimFixed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIM_FIXED: fieldBuilder.buildEdmTypeField(
          'InventDimFixed',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link inventTransOriginTransitRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS_ORIGIN_TRANSIT_RU: fieldBuilder.buildEdmTypeField(
          'InventTransOriginTransit_RU',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link stornoRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORNO_RU: fieldBuilder.buildEnumField('Storno_RU', NoYes, true),
        /**
         * Static representation of the {@link interCompanyInventDimTransferred} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTER_COMPANY_INVENT_DIM_TRANSFERRED: fieldBuilder.buildEnumField(
          'InterCompanyInventDimTransferred',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shippingDateConfirmed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_DATE_CONFIRMED: fieldBuilder.buildEdmTypeField(
          'ShippingDateConfirmed',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link revenueAmountPhysical} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUE_AMOUNT_PHYSICAL: fieldBuilder.buildEdmTypeField(
          'RevenueAmountPhysical',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link voucherPhysical} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_PHYSICAL: fieldBuilder.buildEdmTypeField(
          'VoucherPhysical',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valueOpen} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_OPEN: fieldBuilder.buildEnumField(
          'ValueOpen',
          InventTransOpen,
          true
        ),
        /**
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costAmountSettled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT_SETTLED: fieldBuilder.buildEdmTypeField(
          'CostAmountSettled',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link qtySettledSecCurRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY_SETTLED_SEC_CUR_RU: fieldBuilder.buildEdmTypeField(
          'QtySettledSecCur_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventDimId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIM_ID: fieldBuilder.buildEdmTypeField(
          'InventDimId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sessionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SESSION_ID: fieldBuilder.buildEdmTypeField(
          'SessionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valueOpenSecCurRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_OPEN_SEC_CUR_RU: fieldBuilder.buildEnumField(
          'ValueOpenSecCur_RU',
          InventTransOpen,
          true
        ),
        /**
         * Static representation of the {@link taxAmountPhysical} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT_PHYSICAL: fieldBuilder.buildEdmTypeField(
          'TaxAmountPhysical',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoiceReturned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_RETURNED: fieldBuilder.buildEnumField(
          'InvoiceReturned',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventTransArchiveEntities)
      };
    }

    return this._schema;
  }
}

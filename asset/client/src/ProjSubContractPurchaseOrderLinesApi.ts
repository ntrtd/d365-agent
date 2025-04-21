/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjSubContractPurchaseOrderLines } from './ProjSubContractPurchaseOrderLines';
import { ProjSubContractPurchaseOrderLinesRequestBuilder } from './ProjSubContractPurchaseOrderLinesRequestBuilder';
import { ProjSubConLineStatus } from './ProjSubConLineStatus';
import { PurchStatus } from './PurchStatus';
import { ProjSubConLineType } from './ProjSubConLineType';
import { ProjSubConTransClass } from './ProjSubConTransClass';
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
export class ProjSubContractPurchaseOrderLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProjSubContractPurchaseOrderLines<DeSerializersT>, DeSerializersT>
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
  ): ProjSubContractPurchaseOrderLinesApi<DeSerializersT> {
    return new ProjSubContractPurchaseOrderLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjSubContractPurchaseOrderLines;

  requestBuilder(): ProjSubContractPurchaseOrderLinesRequestBuilder<DeSerializersT> {
    return new ProjSubContractPurchaseOrderLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProjSubContractPurchaseOrderLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjSubContractPurchaseOrderLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjSubContractPurchaseOrderLines<DeSerializersT>,
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
    typeof ProjSubContractPurchaseOrderLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjSubContractPurchaseOrderLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjSubContractPurchaseOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJ_SUB_CONTRACT_LINE_NUMBER: OrderableEdmTypeField<
      ProjSubContractPurchaseOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCH_QTY: OrderableEdmTypeField<
      ProjSubContractPurchaseOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_CON_LINE_STATUS: EnumField<
      ProjSubContractPurchaseOrderLines<DeSerializers>,
      DeSerializersT,
      ProjSubConLineStatus,
      true,
      true
    >;
    PROCUREMENT_CATEGORY: OrderableEdmTypeField<
      ProjSubContractPurchaseOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      ProjSubContractPurchaseOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      ProjSubContractPurchaseOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBCONTRACT_NUMBER: OrderableEdmTypeField<
      ProjSubContractPurchaseOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_CON_ROLE_ID: OrderableEdmTypeField<
      ProjSubContractPurchaseOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_UNIT: OrderableEdmTypeField<
      ProjSubContractPurchaseOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      ProjSubContractPurchaseOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_PRICE: OrderableEdmTypeField<
      ProjSubContractPurchaseOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCH_ID: OrderableEdmTypeField<
      ProjSubContractPurchaseOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_STATUS: EnumField<
      ProjSubContractPurchaseOrderLines<DeSerializers>,
      DeSerializersT,
      PurchStatus,
      true,
      true
    >;
    SUB_CON_TRANS_CATEGORY: OrderableEdmTypeField<
      ProjSubContractPurchaseOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ProjSubContractPurchaseOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_CON_WRITE_IN_NAME: OrderableEdmTypeField<
      ProjSubContractPurchaseOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_CON_LINE_TYPE: EnumField<
      ProjSubContractPurchaseOrderLines<DeSerializers>,
      DeSerializersT,
      ProjSubConLineType,
      true,
      true
    >;
    DELIVERY_DATE: OrderableEdmTypeField<
      ProjSubContractPurchaseOrderLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SUB_CON_TRANS_CLASS: EnumField<
      ProjSubContractPurchaseOrderLines<DeSerializers>,
      DeSerializersT,
      ProjSubConTransClass,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProjSubContractPurchaseOrderLines<DeSerializers>>;
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
         * Static representation of the {@link projSubContractLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_SUB_CONTRACT_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProjSubContractLineNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purchQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_QTY: fieldBuilder.buildEdmTypeField(
          'PurchQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subConLineStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_CON_LINE_STATUS: fieldBuilder.buildEnumField(
          'SubConLineStatus',
          ProjSubConLineStatus,
          true
        ),
        /**
         * Static representation of the {@link procurementCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCUREMENT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ProcurementCategory',
          'Edm.Int64',
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
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link subcontractNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBCONTRACT_NUMBER: fieldBuilder.buildEdmTypeField(
          'SubcontractNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subConRoleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_CON_ROLE_ID: fieldBuilder.buildEdmTypeField(
          'SubConRoleID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_UNIT: fieldBuilder.buildEdmTypeField(
          'PurchUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        /**
         * Static representation of the {@link purchPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_PRICE: fieldBuilder.buildEdmTypeField(
          'PurchPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_ID: fieldBuilder.buildEdmTypeField('PurchId', 'Edm.String', true),
        /**
         * Static representation of the {@link purchStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_STATUS: fieldBuilder.buildEnumField(
          'PurchStatus',
          PurchStatus,
          true
        ),
        /**
         * Static representation of the {@link subConTransCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_CON_TRANS_CATEGORY: fieldBuilder.buildEdmTypeField(
          'SubConTransCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link subConWriteInName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_CON_WRITE_IN_NAME: fieldBuilder.buildEdmTypeField(
          'SubConWriteInName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subConLineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_CON_LINE_TYPE: fieldBuilder.buildEnumField(
          'SubConLineType',
          ProjSubConLineType,
          true
        ),
        /**
         * Static representation of the {@link deliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'DeliveryDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link subConTransClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_CON_TRANS_CLASS: fieldBuilder.buildEnumField(
          'SubConTransClass',
          ProjSubConTransClass,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjSubContractPurchaseOrderLines)
      };
    }

    return this._schema;
  }
}

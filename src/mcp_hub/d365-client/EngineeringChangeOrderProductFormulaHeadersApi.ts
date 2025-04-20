/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangeOrderProductFormulaHeaders } from './EngineeringChangeOrderProductFormulaHeaders';
import { EngineeringChangeOrderProductFormulaHeadersRequestBuilder } from './EngineeringChangeOrderProductFormulaHeadersRequestBuilder';
import { EngineeringChangeOrderProductFormulaByProductsApi } from './EngineeringChangeOrderProductFormulaByProductsApi';
import { EngineeringChangeOrderProductFormulaLinesApi } from './EngineeringChangeOrderProductFormulaLinesApi';
import { EngineeringChangeOrderProductsApi } from './EngineeringChangeOrderProductsApi';
import { WorkersApi } from './WorkersApi';
import { EngineeringChangeOrderProductsV2Api } from './EngineeringChangeOrderProductsV2Api';
import { EngineeringChangeOrderProductsV3Api } from './EngineeringChangeOrderProductsV3Api';
import { EngineeringChangeOrderProductFormulaCoProductsApi } from './EngineeringChangeOrderProductFormulaCoProductsApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class EngineeringChangeOrderProductFormulaHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializersT>,
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
  ): EngineeringChangeOrderProductFormulaHeadersApi<DeSerializersT> {
    return new EngineeringChangeOrderProductFormulaHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductFormulaByProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_FORMULA_BY_PRODUCTS: OneToManyLink<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductFormulaByProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductFormulaLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_FORMULA_LINES: OneToManyLink<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductFormulaLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT: OneToOneLink<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link approverWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVER_WORKER: OneToOneLink<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_V_2: OneToOneLink<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_V_3: OneToOneLink<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductFormulaCoProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_FORMULA_CO_PRODUCTS: OneToManyLink<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductFormulaCoProductsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringChangeOrderProductFormulaByProductsApi<DeSerializersT>,
      EngineeringChangeOrderProductFormulaLinesApi<DeSerializersT>,
      EngineeringChangeOrderProductsApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>,
      EngineeringChangeOrderProductFormulaCoProductsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_ORDER_PRODUCT_FORMULA_BY_PRODUCTS: new OneToManyLink(
        'EngineeringChangeOrderProductFormulaByProducts',
        this,
        linkedApis[0]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCT_FORMULA_LINES: new OneToManyLink(
        'EngineeringChangeOrderProductFormulaLines',
        this,
        linkedApis[1]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCT: new OneToOneLink(
        'EngineeringChangeOrderProduct',
        this,
        linkedApis[2]
      ),
      APPROVER_WORKER: new OneToOneLink('ApproverWorker', this, linkedApis[3]),
      ENGINEERING_CHANGE_ORDER_PRODUCT_V_2: new OneToOneLink(
        'EngineeringChangeOrderProductV2',
        this,
        linkedApis[4]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCT_V_3: new OneToOneLink(
        'EngineeringChangeOrderProductV3',
        this,
        linkedApis[5]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCT_FORMULA_CO_PRODUCTS: new OneToManyLink(
        'EngineeringChangeOrderProductFormulaCoProducts',
        this,
        linkedApis[6]
      )
    };
    return this;
  }

  entityConstructor = EngineeringChangeOrderProductFormulaHeaders;

  requestBuilder(): EngineeringChangeOrderProductFormulaHeadersRequestBuilder<DeSerializersT> {
    return new EngineeringChangeOrderProductFormulaHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangeOrderProductFormulaHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangeOrderProductFormulaHeaders<DeSerializersT>,
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
    typeof EngineeringChangeOrderProductFormulaHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangeOrderProductFormulaHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_LINE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREATION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_TOTAL_COST_ALLOCATION_USED: EnumField<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FORMULA_BATCH_SIZE_MULTIPLES: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FORMULA_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE: EnumField<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BULK_ITEM_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CO_PRODUCT_QUANTITY_VARIATION_ALLOWED: EnumField<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_APPROVED: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    CHANGED_DATE: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FORMULA_NAME: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_COST_CALCULATION_INCLUDE_VERSION: EnumField<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    YIELD_PERCENTAGE: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCTION_SITE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_QUANTITY: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FORMULA_BATCH_SIZE: OrderableEdmTypeField<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductFormulaByProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_FORMULA_BY_PRODUCTS: OneToManyLink<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductFormulaByProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductFormulaLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_FORMULA_LINES: OneToManyLink<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductFormulaLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT: OneToOneLink<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link approverWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVER_WORKER: OneToOneLink<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_V_2: OneToOneLink<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_V_3: OneToOneLink<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductFormulaCoProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_FORMULA_CO_PRODUCTS: OneToManyLink<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductFormulaCoProductsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      EngineeringChangeOrderProductFormulaHeaders<DeSerializers>
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
         * Static representation of the {@link engineeringChangeOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'EngineeringChangeOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link engineeringChangeOrderProductLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_LINE_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductLineNumber',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link creationSequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'CreationSequenceNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isTotalCostAllocationUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TOTAL_COST_ALLOCATION_USED: fieldBuilder.buildEnumField(
          'IsTotalCostAllocationUsed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link formulaBatchSizeMultiples} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMULA_BATCH_SIZE_MULTIPLES: fieldBuilder.buildEdmTypeField(
          'FormulaBatchSizeMultiples',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link formulaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMULA_ID: fieldBuilder.buildEdmTypeField(
          'FormulaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE: fieldBuilder.buildEnumField('IsActive', NoYes, true),
        /**
         * Static representation of the {@link bulkItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BULK_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'BulkItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link approverPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ApproverPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isCoProductQuantityVariationAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CO_PRODUCT_QUANTITY_VARIATION_ALLOWED: fieldBuilder.buildEnumField(
          'IsCoProductQuantityVariationAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isApproved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_APPROVED: fieldBuilder.buildEdmTypeField(
          'IsApproved',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link changedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGED_DATE: fieldBuilder.buildEdmTypeField(
          'ChangedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link formulaName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMULA_NAME: fieldBuilder.buildEdmTypeField(
          'FormulaName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willCostCalculationIncludeVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_COST_CALCULATION_INCLUDE_VERSION: fieldBuilder.buildEnumField(
          'WillCostCalculationIncludeVersion',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link yieldPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YIELD_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'YieldPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productionSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ProductionSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fromQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_QUANTITY: fieldBuilder.buildEdmTypeField(
          'FromQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link formulaBatchSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMULA_BATCH_SIZE: fieldBuilder.buildEdmTypeField(
          'FormulaBatchSize',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          EngineeringChangeOrderProductFormulaHeaders
        )
      };
    }

    return this._schema;
  }
}

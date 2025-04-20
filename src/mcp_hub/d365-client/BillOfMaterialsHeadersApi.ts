/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BillOfMaterialsHeaders } from './BillOfMaterialsHeaders';
import { BillOfMaterialsHeadersRequestBuilder } from './BillOfMaterialsHeadersRequestBuilder';
import { SupplyForecastEntriesApi } from './SupplyForecastEntriesApi';
import { BillOfMaterialsLinesV2Api } from './BillOfMaterialsLinesV2Api';
import { BillOfMaterialsVersionsApi } from './BillOfMaterialsVersionsApi';
import { BillOfMaterialsVersionsV3Api } from './BillOfMaterialsVersionsV3Api';
import { BillOfMaterialsVersionsODataV2Api } from './BillOfMaterialsVersionsODataV2Api';
import { BillOfMaterialsVersionsV4Api } from './BillOfMaterialsVersionsV4Api';
import { BillOfMaterialsLinesApi } from './BillOfMaterialsLinesApi';
import { BillOfMaterialsLinesV3Api } from './BillOfMaterialsLinesV3Api';
import { PlannedOrdersApi } from './PlannedOrdersApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class BillOfMaterialsHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BillOfMaterialsHeaders<DeSerializersT>, DeSerializersT>
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
  ): BillOfMaterialsHeadersApi<DeSerializersT> {
    return new BillOfMaterialsHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link supplyForecastEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUPPLY_FORECAST_ENTRIES: OneToManyLink<
      BillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      SupplyForecastEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_LINE_V_2: OneToManyLink<
      BillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_LINES: OneToManyLink<
      BillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsVersions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_VERSIONS: OneToManyLink<
      BillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsVersionsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_VERSIONS_V_3: OneToManyLink<
      BillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsVersionsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsVersionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_VERSIONS_V_2: OneToManyLink<
      BillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsVersionsODataV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsVersionsV4} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_VERSIONS_V_4: OneToManyLink<
      BillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsVersionsV4Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_LINE: OneToManyLink<
      BillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsLineV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_LINE_V_3: OneToManyLink<
      BillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsLines3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_LINES_3: OneToManyLink<
      BillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link plannedOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLANNED_ORDERS: OneToManyLink<
      BillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      PlannedOrdersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SupplyForecastEntriesApi<DeSerializersT>,
      BillOfMaterialsLinesV2Api<DeSerializersT>,
      BillOfMaterialsLinesV2Api<DeSerializersT>,
      BillOfMaterialsVersionsApi<DeSerializersT>,
      BillOfMaterialsVersionsV3Api<DeSerializersT>,
      BillOfMaterialsVersionsODataV2Api<DeSerializersT>,
      BillOfMaterialsVersionsV4Api<DeSerializersT>,
      BillOfMaterialsLinesApi<DeSerializersT>,
      BillOfMaterialsLinesV3Api<DeSerializersT>,
      BillOfMaterialsLinesV3Api<DeSerializersT>,
      PlannedOrdersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SUPPLY_FORECAST_ENTRIES: new OneToManyLink(
        'SupplyForecastEntries',
        this,
        linkedApis[0]
      ),
      BILL_OF_MATERIALS_LINE_V_2: new OneToManyLink(
        'BillOfMaterialsLineV2',
        this,
        linkedApis[1]
      ),
      BILL_OF_MATERIALS_LINES: new OneToManyLink(
        'BillOfMaterialsLines',
        this,
        linkedApis[2]
      ),
      BILL_OF_MATERIALS_VERSIONS: new OneToManyLink(
        'BillOfMaterialsVersions',
        this,
        linkedApis[3]
      ),
      BILL_OF_MATERIALS_VERSIONS_V_3: new OneToManyLink(
        'BillOfMaterialsVersionsV3',
        this,
        linkedApis[4]
      ),
      BILL_OF_MATERIALS_VERSIONS_V_2: new OneToManyLink(
        'BillOfMaterialsVersionsV2',
        this,
        linkedApis[5]
      ),
      BILL_OF_MATERIALS_VERSIONS_V_4: new OneToManyLink(
        'BillOfMaterialsVersionsV4',
        this,
        linkedApis[6]
      ),
      BILL_OF_MATERIALS_LINE: new OneToManyLink(
        'BillOfMaterialsLine',
        this,
        linkedApis[7]
      ),
      BILL_OF_MATERIALS_LINE_V_3: new OneToManyLink(
        'BillOfMaterialsLineV3',
        this,
        linkedApis[8]
      ),
      BILL_OF_MATERIALS_LINES_3: new OneToManyLink(
        'BillOfMaterialsLines3',
        this,
        linkedApis[9]
      ),
      PLANNED_ORDERS: new OneToManyLink('PlannedOrders', this, linkedApis[10])
    };
    return this;
  }

  entityConstructor = BillOfMaterialsHeaders;

  requestBuilder(): BillOfMaterialsHeadersRequestBuilder<DeSerializersT> {
    return new BillOfMaterialsHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BillOfMaterialsHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BillOfMaterialsHeaders<DeSerializersT>,
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
    typeof BillOfMaterialsHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BillOfMaterialsHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BillOfMaterialsHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BOM_ID: OrderableEdmTypeField<
      BillOfMaterialsHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_GROUP_ID: OrderableEdmTypeField<
      BillOfMaterialsHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_SITE_ID: OrderableEdmTypeField<
      BillOfMaterialsHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      BillOfMaterialsHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOM_NAME: OrderableEdmTypeField<
      BillOfMaterialsHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_APPROVED: EnumField<
      BillOfMaterialsHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENG_CHG_RELEASED_PRODUCT_VERSION: OrderableEdmTypeField<
      BillOfMaterialsHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ENGINEERING_VERSION_ID: OrderableEdmTypeField<
      BillOfMaterialsHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENG_CHG_ENGINEERING_BOM_REFERENCE: OrderableEdmTypeField<
      BillOfMaterialsHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENG_CHG_DISPLAY_PRODUCT_NUMBER: OrderableEdmTypeField<
      BillOfMaterialsHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link supplyForecastEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUPPLY_FORECAST_ENTRIES: OneToManyLink<
      BillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      SupplyForecastEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_LINE_V_2: OneToManyLink<
      BillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_LINES: OneToManyLink<
      BillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsVersions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_VERSIONS: OneToManyLink<
      BillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsVersionsV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_VERSIONS_V_3: OneToManyLink<
      BillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsVersionsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsVersionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_VERSIONS_V_2: OneToManyLink<
      BillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsVersionsODataV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsVersionsV4} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_VERSIONS_V_4: OneToManyLink<
      BillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsVersionsV4Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_LINE: OneToManyLink<
      BillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsLineV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_LINE_V_3: OneToManyLink<
      BillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsLines3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_LINES_3: OneToManyLink<
      BillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link plannedOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLANNED_ORDERS: OneToManyLink<
      BillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      PlannedOrdersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BillOfMaterialsHeaders<DeSerializers>>;
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
         * Static representation of the {@link bomId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_ID: fieldBuilder.buildEdmTypeField('BOMId', 'Edm.String', false),
        /**
         * Static representation of the {@link productGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductGroupId',
          'Edm.String',
          true
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
         * Static representation of the {@link approverPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ApproverPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bomName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_NAME: fieldBuilder.buildEdmTypeField('BOMName', 'Edm.String', true),
        /**
         * Static representation of the {@link isApproved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_APPROVED: fieldBuilder.buildEnumField('IsApproved', NoYes, true),
        /**
         * Static representation of the {@link engChgReleasedProductVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENG_CHG_RELEASED_PRODUCT_VERSION: fieldBuilder.buildEdmTypeField(
          'EngChgReleasedProductVersion',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link engineeringVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'EngineeringVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link engChgEngineeringBomReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENG_CHG_ENGINEERING_BOM_REFERENCE: fieldBuilder.buildEdmTypeField(
          'EngChgEngineeringBomReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link engChgDisplayProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENG_CHG_DISPLAY_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'EngChgDisplayProductNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BillOfMaterialsHeaders)
      };
    }

    return this._schema;
  }
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RouteHeaders } from './RouteHeaders';
import { RouteHeadersRequestBuilder } from './RouteHeadersRequestBuilder';
import { SupplyForecastEntriesApi } from './SupplyForecastEntriesApi';
import { FormulaLinesV2Api } from './FormulaLinesV2Api';
import { RouteVersionsV2Api } from './RouteVersionsV2Api';
import { ReceivedProductReleaseLinesApi } from './ReceivedProductReleaseLinesApi';
import { BillOfMaterialsLinesV2Api } from './BillOfMaterialsLinesV2Api';
import { WorkersApi } from './WorkersApi';
import { ChgSentProductReleaseLinesApi } from './ChgSentProductReleaseLinesApi';
import { QualityOrderHeadersApi } from './QualityOrderHeadersApi';
import { RouteOperationsApi } from './RouteOperationsApi';
import { BillOfMaterialsLinesV3Api } from './BillOfMaterialsLinesV3Api';
import { RouteVersionsApi } from './RouteVersionsApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RouteHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RouteHeaders<DeSerializersT>, DeSerializersT>
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
  ): RouteHeadersApi<DeSerializersT> {
    return new RouteHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link supplyForecastEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUPPLY_FORECAST_ENTRIES: OneToManyLink<
      RouteHeaders<DeSerializersT>,
      DeSerializersT,
      SupplyForecastEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link formulaLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FORMULA_LINES_V_2: OneToManyLink<
      RouteHeaders<DeSerializersT>,
      DeSerializersT,
      FormulaLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link routeVersionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_VERSIONS_V_2: OneToManyLink<
      RouteHeaders<DeSerializersT>,
      DeSerializersT,
      RouteVersionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link receivedProductReleaseLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVED_PRODUCT_RELEASE_LINES: OneToManyLink<
      RouteHeaders<DeSerializersT>,
      DeSerializersT,
      ReceivedProductReleaseLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_LINES: OneToManyLink<
      RouteHeaders<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link approvingWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVING_WORKER: OneToOneLink<
      RouteHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sentProductReleaseLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENT_PRODUCT_RELEASE_LINES: OneToManyLink<
      RouteHeaders<DeSerializersT>,
      DeSerializersT,
      ChgSentProductReleaseLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      RouteHeaders<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link routeOperations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_OPERATIONS: OneToManyLink<
      RouteHeaders<DeSerializersT>,
      DeSerializersT,
      RouteOperationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsLines3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_LINES_3: OneToManyLink<
      RouteHeaders<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link routeVersions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_VERSIONS: OneToManyLink<
      RouteHeaders<DeSerializersT>,
      DeSerializersT,
      RouteVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link plannedOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLANNED_ORDERS: OneToManyLink<
      RouteHeaders<DeSerializersT>,
      DeSerializersT,
      PlannedOrdersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SupplyForecastEntriesApi<DeSerializersT>,
      FormulaLinesV2Api<DeSerializersT>,
      RouteVersionsV2Api<DeSerializersT>,
      ReceivedProductReleaseLinesApi<DeSerializersT>,
      BillOfMaterialsLinesV2Api<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      ChgSentProductReleaseLinesApi<DeSerializersT>,
      QualityOrderHeadersApi<DeSerializersT>,
      RouteOperationsApi<DeSerializersT>,
      BillOfMaterialsLinesV3Api<DeSerializersT>,
      RouteVersionsApi<DeSerializersT>,
      PlannedOrdersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SUPPLY_FORECAST_ENTRIES: new OneToManyLink(
        'SupplyForecastEntries',
        this,
        linkedApis[0]
      ),
      FORMULA_LINES_V_2: new OneToManyLink(
        'FormulaLinesV2',
        this,
        linkedApis[1]
      ),
      ROUTE_VERSIONS_V_2: new OneToManyLink(
        'RouteVersionsV2',
        this,
        linkedApis[2]
      ),
      RECEIVED_PRODUCT_RELEASE_LINES: new OneToManyLink(
        'ReceivedProductReleaseLines',
        this,
        linkedApis[3]
      ),
      BILL_OF_MATERIALS_LINES: new OneToManyLink(
        'BillOfMaterialsLines',
        this,
        linkedApis[4]
      ),
      APPROVING_WORKER: new OneToOneLink(
        'ApprovingWorker',
        this,
        linkedApis[5]
      ),
      SENT_PRODUCT_RELEASE_LINES: new OneToManyLink(
        'SentProductReleaseLines',
        this,
        linkedApis[6]
      ),
      QUALITY_ORDER_HEADERS: new OneToManyLink(
        'QualityOrderHeaders',
        this,
        linkedApis[7]
      ),
      ROUTE_OPERATIONS: new OneToManyLink(
        'RouteOperations',
        this,
        linkedApis[8]
      ),
      BILL_OF_MATERIALS_LINES_3: new OneToManyLink(
        'BillOfMaterialsLines3',
        this,
        linkedApis[9]
      ),
      ROUTE_VERSIONS: new OneToManyLink('RouteVersions', this, linkedApis[10]),
      PLANNED_ORDERS: new OneToManyLink('PlannedOrders', this, linkedApis[11])
    };
    return this;
  }

  entityConstructor = RouteHeaders;

  requestBuilder(): RouteHeadersRequestBuilder<DeSerializersT> {
    return new RouteHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RouteHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RouteHeaders<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RouteHeaders<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RouteHeaders, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(RouteHeaders, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RouteHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROUTE_ID: OrderableEdmTypeField<
      RouteHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_GROUP_ID: OrderableEdmTypeField<
      RouteHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      RouteHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTE_NAME: OrderableEdmTypeField<
      RouteHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_APPROVED: EnumField<
      RouteHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISPLAY_PRODUCT_NUMBER: OrderableEdmTypeField<
      RouteHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENGINEERING_VERSION_ID: OrderableEdmTypeField<
      RouteHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENG_CHG_ENGINEERING_REFERENCE: OrderableEdmTypeField<
      RouteHeaders<DeSerializers>,
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
      RouteHeaders<DeSerializersT>,
      DeSerializersT,
      SupplyForecastEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link formulaLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FORMULA_LINES_V_2: OneToManyLink<
      RouteHeaders<DeSerializersT>,
      DeSerializersT,
      FormulaLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link routeVersionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_VERSIONS_V_2: OneToManyLink<
      RouteHeaders<DeSerializersT>,
      DeSerializersT,
      RouteVersionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link receivedProductReleaseLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVED_PRODUCT_RELEASE_LINES: OneToManyLink<
      RouteHeaders<DeSerializersT>,
      DeSerializersT,
      ReceivedProductReleaseLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_LINES: OneToManyLink<
      RouteHeaders<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link approvingWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVING_WORKER: OneToOneLink<
      RouteHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sentProductReleaseLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENT_PRODUCT_RELEASE_LINES: OneToManyLink<
      RouteHeaders<DeSerializersT>,
      DeSerializersT,
      ChgSentProductReleaseLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      RouteHeaders<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link routeOperations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_OPERATIONS: OneToManyLink<
      RouteHeaders<DeSerializersT>,
      DeSerializersT,
      RouteOperationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link billOfMaterialsLines3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_LINES_3: OneToManyLink<
      RouteHeaders<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link routeVersions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_VERSIONS: OneToManyLink<
      RouteHeaders<DeSerializersT>,
      DeSerializersT,
      RouteVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link plannedOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLANNED_ORDERS: OneToManyLink<
      RouteHeaders<DeSerializersT>,
      DeSerializersT,
      PlannedOrdersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RouteHeaders<DeSerializers>>;
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
         * Static representation of the {@link routeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_ID: fieldBuilder.buildEdmTypeField(
          'RouteId',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link approverPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ApproverPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link routeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_NAME: fieldBuilder.buildEdmTypeField(
          'RouteName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isApproved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_APPROVED: fieldBuilder.buildEnumField('IsApproved', NoYes, true),
        /**
         * Static representation of the {@link displayProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DisplayProductNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link engChgEngineeringReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENG_CHG_ENGINEERING_REFERENCE: fieldBuilder.buildEdmTypeField(
          'EngChgEngineeringReference',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RouteHeaders)
      };
    }

    return this._schema;
  }
}

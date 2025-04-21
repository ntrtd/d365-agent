/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangeOrderProductRouteHeaders } from './EngineeringChangeOrderProductRouteHeaders';
import { EngineeringChangeOrderProductRouteHeadersRequestBuilder } from './EngineeringChangeOrderProductRouteHeadersRequestBuilder';
import { EngineeringChangeOrderProductRouteOperationsApi } from './EngineeringChangeOrderProductRouteOperationsApi';
import { EngineeringChangeOrderProductsApi } from './EngineeringChangeOrderProductsApi';
import { WorkersApi } from './WorkersApi';
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
export class EngineeringChangeOrderProductRouteHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      EngineeringChangeOrderProductRouteHeaders<DeSerializersT>,
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
  ): EngineeringChangeOrderProductRouteHeadersApi<DeSerializersT> {
    return new EngineeringChangeOrderProductRouteHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductRouteOperations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATIONS: OneToManyLink<
      EngineeringChangeOrderProductRouteHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductRouteOperationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT: OneToOneLink<
      EngineeringChangeOrderProductRouteHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link approverWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVER_WORKER: OneToOneLink<
      EngineeringChangeOrderProductRouteHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringChangeOrderProductRouteOperationsApi<DeSerializersT>,
      EngineeringChangeOrderProductsApi<DeSerializersT>,
      WorkersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATIONS: new OneToManyLink(
        'EngineeringChangeOrderProductRouteOperations',
        this,
        linkedApis[0]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCT: new OneToOneLink(
        'EngineeringChangeOrderProduct',
        this,
        linkedApis[1]
      ),
      APPROVER_WORKER: new OneToOneLink('ApproverWorker', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = EngineeringChangeOrderProductRouteHeaders;

  requestBuilder(): EngineeringChangeOrderProductRouteHeadersRequestBuilder<DeSerializersT> {
    return new EngineeringChangeOrderProductRouteHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangeOrderProductRouteHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangeOrderProductRouteHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangeOrderProductRouteHeaders<DeSerializersT>,
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
    typeof EngineeringChangeOrderProductRouteHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangeOrderProductRouteHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_LINE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCTION_SITE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_GROUP_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTE_NAME: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_APPROVED: EnumField<
      EngineeringChangeOrderProductRouteHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductRouteOperations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATIONS: OneToManyLink<
      EngineeringChangeOrderProductRouteHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductRouteOperationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT: OneToOneLink<
      EngineeringChangeOrderProductRouteHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link approverWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVER_WORKER: OneToOneLink<
      EngineeringChangeOrderProductRouteHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      EngineeringChangeOrderProductRouteHeaders<DeSerializers>
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
         * Static representation of the {@link productionSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ProductionSiteId',
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
         * Static representation of the {@link routeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_ID: fieldBuilder.buildEdmTypeField('RouteId', 'Edm.String', true),
        /**
         * Static representation of the {@link isApproved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_APPROVED: fieldBuilder.buildEnumField('IsApproved', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          EngineeringChangeOrderProductRouteHeaders
        )
      };
    }

    return this._schema;
  }
}

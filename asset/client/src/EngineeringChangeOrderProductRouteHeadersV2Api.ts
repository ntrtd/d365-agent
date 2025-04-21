/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangeOrderProductRouteHeadersV2 } from './EngineeringChangeOrderProductRouteHeadersV2';
import { EngineeringChangeOrderProductRouteHeadersV2RequestBuilder } from './EngineeringChangeOrderProductRouteHeadersV2RequestBuilder';
import { EngineeringChangeOrderProductRouteOperationsV2Api } from './EngineeringChangeOrderProductRouteOperationsV2Api';
import { EngineeringChangeOrderProductsApi } from './EngineeringChangeOrderProductsApi';
import { WorkersApi } from './WorkersApi';
import { EngineeringChangeOrderProductsV2Api } from './EngineeringChangeOrderProductsV2Api';
import { EngineeringChangeOrderProductsV3Api } from './EngineeringChangeOrderProductsV3Api';
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
export class EngineeringChangeOrderProductRouteHeadersV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      EngineeringChangeOrderProductRouteHeadersV2<DeSerializersT>,
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
  ): EngineeringChangeOrderProductRouteHeadersV2Api<DeSerializersT> {
    return new EngineeringChangeOrderProductRouteHeadersV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductRouteOperationsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATIONS_V_2: OneToManyLink<
      EngineeringChangeOrderProductRouteHeadersV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductRouteOperationsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT: OneToOneLink<
      EngineeringChangeOrderProductRouteHeadersV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link approverWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVER_WORKER: OneToOneLink<
      EngineeringChangeOrderProductRouteHeadersV2<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_V_2: OneToOneLink<
      EngineeringChangeOrderProductRouteHeadersV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_V_3: OneToOneLink<
      EngineeringChangeOrderProductRouteHeadersV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringChangeOrderProductRouteOperationsV2Api<DeSerializersT>,
      EngineeringChangeOrderProductsApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATIONS_V_2: new OneToManyLink(
        'EngineeringChangeOrderProductRouteOperationsV2',
        this,
        linkedApis[0]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCT: new OneToOneLink(
        'EngineeringChangeOrderProduct',
        this,
        linkedApis[1]
      ),
      APPROVER_WORKER: new OneToOneLink('ApproverWorker', this, linkedApis[2]),
      ENGINEERING_CHANGE_ORDER_PRODUCT_V_2: new OneToOneLink(
        'EngineeringChangeOrderProductV2',
        this,
        linkedApis[3]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCT_V_3: new OneToOneLink(
        'EngineeringChangeOrderProductV3',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = EngineeringChangeOrderProductRouteHeadersV2;

  requestBuilder(): EngineeringChangeOrderProductRouteHeadersV2RequestBuilder<DeSerializersT> {
    return new EngineeringChangeOrderProductRouteHeadersV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangeOrderProductRouteHeadersV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangeOrderProductRouteHeadersV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangeOrderProductRouteHeadersV2<DeSerializersT>,
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
    typeof EngineeringChangeOrderProductRouteHeadersV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangeOrderProductRouteHeadersV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_LINE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREATION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCT_GROUP_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENGINEERING_REFERENCE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTE_NAME: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_APPROVED: EnumField<
      EngineeringChangeOrderProductRouteHeadersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCTION_SITE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteHeadersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductRouteOperationsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATIONS_V_2: OneToManyLink<
      EngineeringChangeOrderProductRouteHeadersV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductRouteOperationsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT: OneToOneLink<
      EngineeringChangeOrderProductRouteHeadersV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link approverWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVER_WORKER: OneToOneLink<
      EngineeringChangeOrderProductRouteHeadersV2<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_V_2: OneToOneLink<
      EngineeringChangeOrderProductRouteHeadersV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_V_3: OneToOneLink<
      EngineeringChangeOrderProductRouteHeadersV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      EngineeringChangeOrderProductRouteHeadersV2<DeSerializers>
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
         * Static representation of the {@link productGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link engineeringReferenceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_REFERENCE_ID: fieldBuilder.buildEdmTypeField(
          'EngineeringReferenceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link routeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_ID: fieldBuilder.buildEdmTypeField('RouteId', 'Edm.String', true),
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
         * Static representation of the {@link approverPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ApproverPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isApproved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_APPROVED: fieldBuilder.buildEnumField('IsApproved', NoYes, true),
        /**
         * Static representation of the {@link productionSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ProductionSiteId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          EngineeringChangeOrderProductRouteHeadersV2
        )
      };
    }

    return this._schema;
  }
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RouteOperationsV2 } from './RouteOperationsV2';
import { RouteOperationsV2RequestBuilder } from './RouteOperationsV2RequestBuilder';
import { RouteOprPriority } from './RouteOprPriority';
import { SchedJobLinkType } from './SchedJobLinkType';
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
export class RouteOperationsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RouteOperationsV2<DeSerializersT>, DeSerializersT>
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
  ): RouteOperationsV2Api<DeSerializersT> {
    return new RouteOperationsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RouteOperationsV2;

  requestBuilder(): RouteOperationsV2RequestBuilder<DeSerializersT> {
    return new RouteOperationsV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RouteOperationsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RouteOperationsV2<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RouteOperationsV2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof RouteOperationsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RouteOperationsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RouteOperationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROUTE_ID: OrderableEdmTypeField<
      RouteOperationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATION_NUMBER: OrderableEdmTypeField<
      RouteOperationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    OPERATION_PRIORITY: EnumField<
      RouteOperationsV2<DeSerializers>,
      DeSerializersT,
      RouteOprPriority,
      true,
      true
    >;
    ACCUMULATED_SCRAP_PERCENTAGE: OrderableEdmTypeField<
      RouteOperationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NEXT_ROUTE_OPERATION_NUMBER: OrderableEdmTypeField<
      RouteOperationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SCRAP_PERCENTAGE: OrderableEdmTypeField<
      RouteOperationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NEXT_OPERATION_LINK_TYPE: EnumField<
      RouteOperationsV2<DeSerializers>,
      DeSerializersT,
      SchedJobLinkType,
      true,
      true
    >;
    OPERATION_ID: OrderableEdmTypeField<
      RouteOperationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RouteOperationsV2<DeSerializers>>;
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
         * Static representation of the {@link operationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperationNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link operationPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_PRIORITY: fieldBuilder.buildEnumField(
          'OperationPriority',
          RouteOprPriority,
          true
        ),
        /**
         * Static representation of the {@link accumulatedScrapPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCUMULATED_SCRAP_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'AccumulatedScrapPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link nextRouteOperationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_ROUTE_OPERATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'NextRouteOperationNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link scrapPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCRAP_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'ScrapPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link nextOperationLinkType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_OPERATION_LINK_TYPE: fieldBuilder.buildEnumField(
          'NextOperationLinkType',
          SchedJobLinkType,
          true
        ),
        /**
         * Static representation of the {@link operationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_ID: fieldBuilder.buildEdmTypeField(
          'OperationId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RouteOperationsV2)
      };
    }

    return this._schema;
  }
}

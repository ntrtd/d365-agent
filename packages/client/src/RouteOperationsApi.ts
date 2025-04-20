/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RouteOperations } from './RouteOperations';
import { RouteOperationsRequestBuilder } from './RouteOperationsRequestBuilder';
import { OperationsApi } from './OperationsApi';
import { RouteHeadersApi } from './RouteHeadersApi';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RouteOperationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RouteOperations<DeSerializersT>, DeSerializersT>
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
  ): RouteOperationsApi<DeSerializersT> {
    return new RouteOperationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link operation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATION: OneToOneLink<
      RouteOperations<DeSerializersT>,
      DeSerializersT,
      OperationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link routeHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_HEADER: OneToOneLink<
      RouteOperations<DeSerializersT>,
      DeSerializersT,
      RouteHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [OperationsApi<DeSerializersT>, RouteHeadersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      OPERATION: new OneToOneLink('Operation', this, linkedApis[0]),
      ROUTE_HEADER: new OneToOneLink('RouteHeader', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = RouteOperations;

  requestBuilder(): RouteOperationsRequestBuilder<DeSerializersT> {
    return new RouteOperationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RouteOperations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RouteOperations<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RouteOperations<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RouteOperations, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RouteOperations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROUTE_ID: OrderableEdmTypeField<
      RouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATION_NUMBER: OrderableEdmTypeField<
      RouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    OPERATION_PRIORITY: OrderableEdmTypeField<
      RouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACCUMULATED_SCRAP_PERCENTAGE: OrderableEdmTypeField<
      RouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NEXT_ROUTE_OPERATION_NUMBER: OrderableEdmTypeField<
      RouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SCRAP_PERCENTAGE: OrderableEdmTypeField<
      RouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NEXT_OPERATION_ATTACHMENT_TYPE: EnumField<
      RouteOperations<DeSerializers>,
      DeSerializersT,
      SchedJobLinkType,
      true,
      true
    >;
    OPERATION_ID: OrderableEdmTypeField<
      RouteOperations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATION: OneToOneLink<
      RouteOperations<DeSerializersT>,
      DeSerializersT,
      OperationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link routeHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_HEADER: OneToOneLink<
      RouteOperations<DeSerializersT>,
      DeSerializersT,
      RouteHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RouteOperations<DeSerializers>>;
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
        OPERATION_PRIORITY: fieldBuilder.buildEdmTypeField(
          'OperationPriority',
          'Edm.Int32',
          false
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
         * Static representation of the {@link nextOperationAttachmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_OPERATION_ATTACHMENT_TYPE: fieldBuilder.buildEnumField(
          'NextOperationAttachmentType',
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
        ALL_FIELDS: new AllFields('*', RouteOperations)
      };
    }

    return this._schema;
  }
}

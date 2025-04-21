/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangeOrderProductRouteOperationsV2 } from './EngineeringChangeOrderProductRouteOperationsV2';
import { EngineeringChangeOrderProductRouteOperationsV2RequestBuilder } from './EngineeringChangeOrderProductRouteOperationsV2RequestBuilder';
import { EngineeringChangeOrderProductRouteHeadersV2Api } from './EngineeringChangeOrderProductRouteHeadersV2Api';
import { EngineeringChangeOrderProductRouteOperationPropertiesV2Api } from './EngineeringChangeOrderProductRouteOperationPropertiesV2Api';
import { RouteOprPriority } from './RouteOprPriority';
import { EngChgEcmChangeTypes } from './EngChgEcmChangeTypes';
import { JmgJobPayTypeEnum } from './JmgJobPayTypeEnum';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class EngineeringChangeOrderProductRouteOperationsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      EngineeringChangeOrderProductRouteOperationsV2<DeSerializersT>,
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
  ): EngineeringChangeOrderProductRouteOperationsV2Api<DeSerializersT> {
    return new EngineeringChangeOrderProductRouteOperationsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductRouteHeaderV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_HEADER_V_2: OneToOneLink<
      EngineeringChangeOrderProductRouteOperationsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductRouteHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductRouteOperationPropertiesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_V_2: OneToManyLink<
      EngineeringChangeOrderProductRouteOperationsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductRouteOperationPropertiesV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringChangeOrderProductRouteHeadersV2Api<DeSerializersT>,
      EngineeringChangeOrderProductRouteOperationPropertiesV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_HEADER_V_2: new OneToOneLink(
        'EngineeringChangeOrderProductRouteHeaderV2',
        this,
        linkedApis[0]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_V_2:
        new OneToManyLink(
          'EngineeringChangeOrderProductRouteOperationPropertiesV2',
          this,
          linkedApis[1]
        )
    };
    return this;
  }

  entityConstructor = EngineeringChangeOrderProductRouteOperationsV2;

  requestBuilder(): EngineeringChangeOrderProductRouteOperationsV2RequestBuilder<DeSerializersT> {
    return new EngineeringChangeOrderProductRouteOperationsV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangeOrderProductRouteOperationsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangeOrderProductRouteOperationsV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangeOrderProductRouteOperationsV2<DeSerializersT>,
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
    typeof EngineeringChangeOrderProductRouteOperationsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangeOrderProductRouteOperationsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_LINE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_HEADER_CREATION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    OPERATION_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    OPERATION_PRIORITY: EnumField<
      EngineeringChangeOrderProductRouteOperationsV2<DeSerializers>,
      DeSerializersT,
      RouteOprPriority,
      true,
      true
    >;
    CHANGE_TYPE: EnumField<
      EngineeringChangeOrderProductRouteOperationsV2<DeSerializers>,
      DeSerializersT,
      EngChgEcmChangeTypes,
      true,
      true
    >;
    OPERATION_RATE_METHOD: EnumField<
      EngineeringChangeOrderProductRouteOperationsV2<DeSerializers>,
      DeSerializersT,
      JmgJobPayTypeEnum,
      true,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEXT_OPERATION_LINK_TYPE: EnumField<
      EngineeringChangeOrderProductRouteOperationsV2<DeSerializers>,
      DeSerializersT,
      SchedJobLinkType,
      true,
      true
    >;
    OPERATION_SEQUENCE: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SCRAP_PERCENTAGE: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NEXT_ROUTE_OPERATION_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    OPERATION_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCUMULATED_SCRAP_PERCENTAGE: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductRouteHeaderV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_HEADER_V_2: OneToOneLink<
      EngineeringChangeOrderProductRouteOperationsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductRouteHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductRouteOperationPropertiesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_V_2: OneToManyLink<
      EngineeringChangeOrderProductRouteOperationsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductRouteOperationPropertiesV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      EngineeringChangeOrderProductRouteOperationsV2<DeSerializers>
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
         * Static representation of the {@link engineeringChangeOrderProductRouteHeaderCreationSequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_HEADER_CREATION_SEQUENCE_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductRouteHeaderCreationSequenceNumber',
            'Edm.Int32',
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
         * Static representation of the {@link changeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_TYPE: fieldBuilder.buildEnumField(
          'ChangeType',
          EngChgEcmChangeTypes,
          true
        ),
        /**
         * Static representation of the {@link operationRateMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_RATE_METHOD: fieldBuilder.buildEnumField(
          'OperationRateMethod',
          JmgJobPayTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link engineeringChangeOrderProductRouteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_ID:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductRouteId',
            'Edm.String',
            true
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
         * Static representation of the {@link operationSequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_SEQUENCE: fieldBuilder.buildEdmTypeField(
          'OperationSequence',
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
         * Static representation of the {@link nextRouteOperationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_ROUTE_OPERATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'NextRouteOperationNumber',
          'Edm.Int32',
          false
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
        /**
         * Static representation of the {@link accumulatedScrapPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCUMULATED_SCRAP_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'AccumulatedScrapPercentage',
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
          EngineeringChangeOrderProductRouteOperationsV2
        )
      };
    }

    return this._schema;
  }
}

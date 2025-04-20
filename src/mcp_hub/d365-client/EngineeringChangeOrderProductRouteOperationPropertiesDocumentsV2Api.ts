/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2 } from './EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2';
import { EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2RequestBuilder } from './EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2RequestBuilder';
import { EngineeringChangeOrderProductRouteOperationPropertiesV2Api } from './EngineeringChangeOrderProductRouteOperationPropertiesV2Api';
import { EngChgEcmChangeTypes } from './EngChgEcmChangeTypes';
import { RouteOprPriority } from './RouteOprPriority';
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
export class EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<DeSerializersT>,
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
  ): EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2Api<DeSerializersT> {
    return new EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2Api(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductRouteOperationPropertiesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_V_2: OneToOneLink<
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductRouteOperationPropertiesV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringChangeOrderProductRouteOperationPropertiesV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_V_2:
        new OneToOneLink(
          'EngineeringChangeOrderProductRouteOperationPropertiesV2',
          this,
          linkedApis[0]
        )
    };
    return this;
  }

  entityConstructor =
    EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2;

  requestBuilder(): EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2RequestBuilder<DeSerializersT> {
    return new EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<DeSerializersT>,
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
    typeof EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_LINE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_HEADER_CREATION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_CHANGE_TYPE: EnumField<
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<DeSerializers>,
      DeSerializersT,
      EngChgEcmChangeTypes,
      true,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PRIORITY: EnumField<
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<DeSerializers>,
      DeSerializersT,
      RouteOprPriority,
      true,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_ROUTE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_ITEM_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_PRODUCT_GROUP_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_CHANGE_TYPE: EnumField<
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<DeSerializers>,
      DeSerializersT,
      EngChgEcmChangeTypes,
      true,
      true
    >;
    DOCUMENT_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    SEQUENCE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DOCUMENT_MODIFICATION_TYPE: EnumField<
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<DeSerializers>,
      DeSerializersT,
      EngChgEcmChangeTypes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductRouteOperationPropertiesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_V_2: OneToOneLink<
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductRouteOperationPropertiesV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2<DeSerializers>
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
         * Static representation of the {@link engineeringChangeOrderProductRouteOperationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_ID:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductRouteOperationId',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link engineeringChangeOrderProductRouteOperationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductRouteOperationNumber',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link engineeringChangeOrderProductRouteOperationChangeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_CHANGE_TYPE:
          fieldBuilder.buildEnumField(
            'EngineeringChangeOrderProductRouteOperationChangeType',
            EngChgEcmChangeTypes,
            true
          ),
        /**
         * Static representation of the {@link engineeringChangeOrderProductRouteOperationPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PRIORITY:
          fieldBuilder.buildEnumField(
            'EngineeringChangeOrderProductRouteOperationPriority',
            RouteOprPriority,
            true
          ),
        /**
         * Static representation of the {@link engineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_PRODUCT_CONFIGURATION_ID:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductRouteOperationPropertiesProductConfigurationId',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link engineeringChangeOrderProductRouteOperationPropertiesRouteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_ROUTE_ID:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductRouteOperationPropertiesRouteId',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link engineeringChangeOrderProductRouteOperationPropertiesItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_ITEM_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductRouteOperationPropertiesItemNumber',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link engineeringChangeOrderProductRouteOperationPropertiesProductGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_PRODUCT_GROUP_ID:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductRouteOperationPropertiesProductGroupId',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link engineeringChangeOrderProductRouteOperationPropertiesChangeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_ROUTE_OPERATION_PROPERTIES_CHANGE_TYPE:
          fieldBuilder.buildEnumField(
            'EngineeringChangeOrderProductRouteOperationPropertiesChangeType',
            EngChgEcmChangeTypes,
            true
          ),
        /**
         * Static representation of the {@link documentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_ID: fieldBuilder.buildEdmTypeField(
          'DocumentId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link sequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SequenceNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link documentModificationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_MODIFICATION_TYPE: fieldBuilder.buildEnumField(
          'DocumentModificationType',
          EngChgEcmChangeTypes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          EngineeringChangeOrderProductRouteOperationPropertiesDocumentsV2
        )
      };
    }

    return this._schema;
  }
}

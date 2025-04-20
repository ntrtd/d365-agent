/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangeOrderProductDocuments } from './EngineeringChangeOrderProductDocuments';
import { EngineeringChangeOrderProductDocumentsRequestBuilder } from './EngineeringChangeOrderProductDocumentsRequestBuilder';
import { EngineeringChangeOrderProductsApi } from './EngineeringChangeOrderProductsApi';
import { EngineeringChangeOrderProductsV2Api } from './EngineeringChangeOrderProductsV2Api';
import { EngineeringChangeOrderProductsV3Api } from './EngineeringChangeOrderProductsV3Api';
import { EngChgEcmChangeTypes } from './EngChgEcmChangeTypes';
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
export class EngineeringChangeOrderProductDocumentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      EngineeringChangeOrderProductDocuments<DeSerializersT>,
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
  ): EngineeringChangeOrderProductDocumentsApi<DeSerializersT> {
    return new EngineeringChangeOrderProductDocumentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT: OneToOneLink<
      EngineeringChangeOrderProductDocuments<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_V_2: OneToOneLink<
      EngineeringChangeOrderProductDocuments<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_V_3: OneToOneLink<
      EngineeringChangeOrderProductDocuments<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringChangeOrderProductsApi<DeSerializersT>,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_ORDER_PRODUCT: new OneToOneLink(
        'EngineeringChangeOrderProduct',
        this,
        linkedApis[0]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCT_V_2: new OneToOneLink(
        'EngineeringChangeOrderProductV2',
        this,
        linkedApis[1]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCT_V_3: new OneToOneLink(
        'EngineeringChangeOrderProductV3',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = EngineeringChangeOrderProductDocuments;

  requestBuilder(): EngineeringChangeOrderProductDocumentsRequestBuilder<DeSerializersT> {
    return new EngineeringChangeOrderProductDocumentsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangeOrderProductDocuments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangeOrderProductDocuments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangeOrderProductDocuments<DeSerializersT>,
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
    typeof EngineeringChangeOrderProductDocuments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangeOrderProductDocuments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOCUMENT_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    SEQUENCE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DOCUMENT_MODIFICATION_TYPE: EnumField<
      EngineeringChangeOrderProductDocuments<DeSerializers>,
      DeSerializersT,
      EngChgEcmChangeTypes,
      true,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_LINE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductDocuments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT: OneToOneLink<
      EngineeringChangeOrderProductDocuments<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_V_2: OneToOneLink<
      EngineeringChangeOrderProductDocuments<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_V_3: OneToOneLink<
      EngineeringChangeOrderProductDocuments<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      EngineeringChangeOrderProductDocuments<DeSerializers>
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
         * Static representation of the {@link engineeringChangeOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'EngineeringChangeOrderNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EngineeringChangeOrderProductDocuments)
      };
    }

    return this._schema;
  }
}

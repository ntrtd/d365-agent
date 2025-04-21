/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LtmVendorCaiDocumentClasses } from './LtmVendorCaiDocumentClasses';
import { LtmVendorCaiDocumentClassesRequestBuilder } from './LtmVendorCaiDocumentClassesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class LtmVendorCaiDocumentClassesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LtmVendorCaiDocumentClasses<DeSerializersT>, DeSerializersT>
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
  ): LtmVendorCaiDocumentClassesApi<DeSerializersT> {
    return new LtmVendorCaiDocumentClassesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LtmVendorCaiDocumentClasses;

  requestBuilder(): LtmVendorCaiDocumentClassesRequestBuilder<DeSerializersT> {
    return new LtmVendorCaiDocumentClassesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LtmVendorCaiDocumentClasses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LtmVendorCaiDocumentClasses<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LtmVendorCaiDocumentClasses<DeSerializersT>,
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
    typeof LtmVendorCaiDocumentClasses,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LtmVendorCaiDocumentClasses,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LtmVendorCaiDocumentClasses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_NUM: OrderableEdmTypeField<
      LtmVendorCaiDocumentClasses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CAI: OrderableEdmTypeField<
      LtmVendorCaiDocumentClasses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOCUMENT_CLASSIFICATION_ID: OrderableEdmTypeField<
      LtmVendorCaiDocumentClasses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<LtmVendorCaiDocumentClasses<DeSerializers>>;
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
         * Static representation of the {@link accountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'AccountNum',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link cai} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAI: fieldBuilder.buildEdmTypeField('CAI', 'Edm.String', false),
        /**
         * Static representation of the {@link documentClassificationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CLASSIFICATION_ID: fieldBuilder.buildEdmTypeField(
          'DocumentClassificationId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LtmVendorCaiDocumentClasses)
      };
    }

    return this._schema;
  }
}

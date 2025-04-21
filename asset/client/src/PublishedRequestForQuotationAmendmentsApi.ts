/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PublishedRequestForQuotationAmendments } from './PublishedRequestForQuotationAmendments';
import { PublishedRequestForQuotationAmendmentsRequestBuilder } from './PublishedRequestForQuotationAmendmentsRequestBuilder';
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
export class PublishedRequestForQuotationAmendmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      PublishedRequestForQuotationAmendments<DeSerializersT>,
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
  ): PublishedRequestForQuotationAmendmentsApi<DeSerializersT> {
    return new PublishedRequestForQuotationAmendmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PublishedRequestForQuotationAmendments;

  requestBuilder(): PublishedRequestForQuotationAmendmentsRequestBuilder<DeSerializersT> {
    return new PublishedRequestForQuotationAmendmentsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PublishedRequestForQuotationAmendments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PublishedRequestForQuotationAmendments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PublishedRequestForQuotationAmendments<DeSerializersT>,
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
    typeof PublishedRequestForQuotationAmendments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PublishedRequestForQuotationAmendments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PublishedRequestForQuotationAmendments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RFQ_CASE_NUMBER: OrderableEdmTypeField<
      PublishedRequestForQuotationAmendments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AMENDMENT_NUMBER: OrderableEdmTypeField<
      PublishedRequestForQuotationAmendments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AMENDMENT_DESCRIPTION: OrderableEdmTypeField<
      PublishedRequestForQuotationAmendments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMENDMENT_REQUESTER_NAME: OrderableEdmTypeField<
      PublishedRequestForQuotationAmendments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMENDMENT_NAME: OrderableEdmTypeField<
      PublishedRequestForQuotationAmendments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      PublishedRequestForQuotationAmendments<DeSerializers>
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
         * Static representation of the {@link rfqCaseNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_CASE_NUMBER: fieldBuilder.buildEdmTypeField(
          'RFQCaseNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link amendmentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMENDMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AmendmentNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link amendmentDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMENDMENT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'AmendmentDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amendmentRequesterName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMENDMENT_REQUESTER_NAME: fieldBuilder.buildEdmTypeField(
          'AmendmentRequesterName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amendmentName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMENDMENT_NAME: fieldBuilder.buildEdmTypeField(
          'AmendmentName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PublishedRequestForQuotationAmendments)
      };
    }

    return this._schema;
  }
}

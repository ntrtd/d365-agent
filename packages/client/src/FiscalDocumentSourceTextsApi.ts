/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalDocumentSourceTexts } from './FiscalDocumentSourceTexts';
import { FiscalDocumentSourceTextsRequestBuilder } from './FiscalDocumentSourceTextsRequestBuilder';
import { FiscalDocSourceTextReferenceProcessesApi } from './FiscalDocSourceTextReferenceProcessesApi';
import { NoYes } from './NoYes';
import { DocuRestriction } from './DocuRestriction';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class FiscalDocumentSourceTextsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<FiscalDocumentSourceTexts<DeSerializersT>, DeSerializersT>
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
  ): FiscalDocumentSourceTextsApi<DeSerializersT> {
    return new FiscalDocumentSourceTextsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link fiscalDocSourceTextReferenceProcess} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FISCAL_DOC_SOURCE_TEXT_REFERENCE_PROCESS: OneToManyLink<
      FiscalDocumentSourceTexts<DeSerializersT>,
      DeSerializersT,
      FiscalDocSourceTextReferenceProcessesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [FiscalDocSourceTextReferenceProcessesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      FISCAL_DOC_SOURCE_TEXT_REFERENCE_PROCESS: new OneToManyLink(
        'FiscalDocSourceTextReferenceProcess',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = FiscalDocumentSourceTexts;

  requestBuilder(): FiscalDocumentSourceTextsRequestBuilder<DeSerializersT> {
    return new FiscalDocumentSourceTextsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FiscalDocumentSourceTexts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FiscalDocumentSourceTexts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FiscalDocumentSourceTexts<DeSerializersT>,
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
    typeof FiscalDocumentSourceTexts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalDocumentSourceTexts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FiscalDocumentSourceTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_DOCUMENT_TEXT: OrderableEdmTypeField<
      FiscalDocumentSourceTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_INFORMATION: EnumField<
      FiscalDocumentSourceTexts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RESTRICTION: EnumField<
      FiscalDocumentSourceTexts<DeSerializers>,
      DeSerializersT,
      DocuRestriction,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      FiscalDocumentSourceTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEXT: OrderableEdmTypeField<
      FiscalDocumentSourceTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link fiscalDocSourceTextReferenceProcess} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FISCAL_DOC_SOURCE_TEXT_REFERENCE_PROCESS: OneToManyLink<
      FiscalDocumentSourceTexts<DeSerializersT>,
      DeSerializersT,
      FiscalDocSourceTextReferenceProcessesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FiscalDocumentSourceTexts<DeSerializers>>;
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
         * Static representation of the {@link fiscalDocumentText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_TEXT: fieldBuilder.buildEdmTypeField(
          'FiscalDocumentText',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fiscalInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_INFORMATION: fieldBuilder.buildEnumField(
          'FiscalInformation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link restriction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESTRICTION: fieldBuilder.buildEnumField(
          'Restriction',
          DocuRestriction,
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link text} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT: fieldBuilder.buildEdmTypeField('Text', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalDocumentSourceTexts)
      };
    }

    return this._schema;
  }
}

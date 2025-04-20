/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes } from './FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes';
import { FbFiscalDocumentAdjustmentCodeIcmsTaxationCodesRequestBuilder } from './FbFiscalDocumentAdjustmentCodeIcmsTaxationCodesRequestBuilder';
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
export class FbFiscalDocumentAdjustmentCodeIcmsTaxationCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes<DeSerializersT>,
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
  ): FbFiscalDocumentAdjustmentCodeIcmsTaxationCodesApi<DeSerializersT> {
    return new FbFiscalDocumentAdjustmentCodeIcmsTaxationCodesApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes;

  requestBuilder(): FbFiscalDocumentAdjustmentCodeIcmsTaxationCodesRequestBuilder<DeSerializersT> {
    return new FbFiscalDocumentAdjustmentCodeIcmsTaxationCodesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes<DeSerializersT>,
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
    typeof FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAXATION_CODE: OrderableEdmTypeField<
      FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SPED_ADJUSTMENT_CODE: OrderableEdmTypeField<
      FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes<DeSerializers>
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
         * Static representation of the {@link taxationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAXATION_CODE: fieldBuilder.buildEdmTypeField(
          'TaxationCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link spedAdjustmentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPED_ADJUSTMENT_CODE: fieldBuilder.buildEdmTypeField(
          'SpedAdjustmentCode',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          FbFiscalDocumentAdjustmentCodeIcmsTaxationCodes
        )
      };
    }

    return this._schema;
  }
}

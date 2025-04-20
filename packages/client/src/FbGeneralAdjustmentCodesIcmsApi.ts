/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FbGeneralAdjustmentCodesIcms } from './FbGeneralAdjustmentCodesIcms';
import { FbGeneralAdjustmentCodesIcmsRequestBuilder } from './FbGeneralAdjustmentCodesIcmsRequestBuilder';
import { NoYes } from './NoYes';
import { FbGeneralClassificationIcmsBr } from './FbGeneralClassificationIcmsBr';
import { FbicmsTypeBr } from './FbicmsTypeBr';
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
export class FbGeneralAdjustmentCodesIcmsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<FbGeneralAdjustmentCodesIcms<DeSerializersT>, DeSerializersT>
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
  ): FbGeneralAdjustmentCodesIcmsApi<DeSerializersT> {
    return new FbGeneralAdjustmentCodesIcmsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FbGeneralAdjustmentCodesIcms;

  requestBuilder(): FbGeneralAdjustmentCodesIcmsRequestBuilder<DeSerializersT> {
    return new FbGeneralAdjustmentCodesIcmsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FbGeneralAdjustmentCodesIcms<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FbGeneralAdjustmentCodesIcms<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FbGeneralAdjustmentCodesIcms<DeSerializersT>,
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
    typeof FbGeneralAdjustmentCodesIcms,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FbGeneralAdjustmentCodesIcms,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    IDENTIFICATION: OrderableEdmTypeField<
      FbGeneralAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATE: OrderableEdmTypeField<
      FbGeneralAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEITA_CODE: OrderableEdmTypeField<
      FbGeneralAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OTHER_DEBIT: EnumField<
      FbGeneralAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GIA_ADJUSTMENT_CODE: OrderableEdmTypeField<
      FbGeneralAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OCCURRENCE_CODE: OrderableEdmTypeField<
      FbGeneralAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLASSIFICATION: EnumField<
      FbGeneralAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      FbGeneralClassificationIcmsBr,
      true,
      true
    >;
    ICMS_TYPE: EnumField<
      FbGeneralAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      FbicmsTypeBr,
      true,
      true
    >;
    SPED_ADJUSTMENT_CODE: OrderableEdmTypeField<
      FbGeneralAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      FbGeneralAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_TO_DATE: OrderableEdmTypeField<
      FbGeneralAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_FROM_DATE: OrderableEdmTypeField<
      FbGeneralAdjustmentCodesIcms<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<FbGeneralAdjustmentCodesIcms<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link identification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION: fieldBuilder.buildEdmTypeField(
          'Identification',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
        /**
         * Static representation of the {@link receitaCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEITA_CODE: fieldBuilder.buildEdmTypeField(
          'ReceitaCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link otherDebit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OTHER_DEBIT: fieldBuilder.buildEnumField('OtherDebit', NoYes, true),
        /**
         * Static representation of the {@link giaAdjustmentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIA_ADJUSTMENT_CODE: fieldBuilder.buildEdmTypeField(
          'GIAAdjustmentCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link occurrenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OCCURRENCE_CODE: fieldBuilder.buildEdmTypeField(
          'OccurrenceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link classification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASSIFICATION: fieldBuilder.buildEnumField(
          'Classification',
          FbGeneralClassificationIcmsBr,
          true
        ),
        /**
         * Static representation of the {@link icmsType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ICMS_TYPE: fieldBuilder.buildEnumField('ICMSType', FbicmsTypeBr, true),
        /**
         * Static representation of the {@link spedAdjustmentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPED_ADJUSTMENT_CODE: fieldBuilder.buildEdmTypeField(
          'SpedAdjustmentCode',
          'Edm.String',
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
         * Static representation of the {@link validToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO_DATE: fieldBuilder.buildEdmTypeField(
          'ValidToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'ValidFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FbGeneralAdjustmentCodesIcms)
      };
    }

    return this._schema;
  }
}

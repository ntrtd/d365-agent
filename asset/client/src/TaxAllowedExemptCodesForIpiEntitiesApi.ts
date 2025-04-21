/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxAllowedExemptCodesForIpiEntities } from './TaxAllowedExemptCodesForIpiEntities';
import { TaxAllowedExemptCodesForIpiEntitiesRequestBuilder } from './TaxAllowedExemptCodesForIpiEntitiesRequestBuilder';
import { TaxFiscalValueBr } from './TaxFiscalValueBr';
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
export class TaxAllowedExemptCodesForIpiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TaxAllowedExemptCodesForIpiEntities<DeSerializersT>,
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
  ): TaxAllowedExemptCodesForIpiEntitiesApi<DeSerializersT> {
    return new TaxAllowedExemptCodesForIpiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxAllowedExemptCodesForIpiEntities;

  requestBuilder(): TaxAllowedExemptCodesForIpiEntitiesRequestBuilder<DeSerializersT> {
    return new TaxAllowedExemptCodesForIpiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TaxAllowedExemptCodesForIpiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TaxAllowedExemptCodesForIpiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TaxAllowedExemptCodesForIpiEntities<DeSerializersT>,
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
    typeof TaxAllowedExemptCodesForIpiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxAllowedExemptCodesForIpiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxAllowedExemptCodesForIpiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXEMPT_CODE: OrderableEdmTypeField<
      TaxAllowedExemptCodesForIpiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAXATION_CODE: OrderableEdmTypeField<
      TaxAllowedExemptCodesForIpiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_VALUE: EnumField<
      TaxAllowedExemptCodesForIpiEntities<DeSerializers>,
      DeSerializersT,
      TaxFiscalValueBr,
      true,
      true
    >;
    ALL_FIELDS: AllFields<TaxAllowedExemptCodesForIpiEntities<DeSerializers>>;
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
         * Static representation of the {@link exemptCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT_CODE: fieldBuilder.buildEdmTypeField(
          'ExemptCode',
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
         * Static representation of the {@link fiscalValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_VALUE: fieldBuilder.buildEnumField(
          'FiscalValue',
          TaxFiscalValueBr,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxAllowedExemptCodesForIpiEntities)
      };
    }

    return this._schema;
  }
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FunctionalityProfileFiscalIntegrationTechnicalProfileLines } from './FunctionalityProfileFiscalIntegrationTechnicalProfileLines';
import { FunctionalityProfileFiscalIntegrationTechnicalProfileLinesRequestBuilder } from './FunctionalityProfileFiscalIntegrationTechnicalProfileLinesRequestBuilder';
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
export class FunctionalityProfileFiscalIntegrationTechnicalProfileLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      FunctionalityProfileFiscalIntegrationTechnicalProfileLines<DeSerializersT>,
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
  ): FunctionalityProfileFiscalIntegrationTechnicalProfileLinesApi<DeSerializersT> {
    return new FunctionalityProfileFiscalIntegrationTechnicalProfileLinesApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor =
    FunctionalityProfileFiscalIntegrationTechnicalProfileLines;

  requestBuilder(): FunctionalityProfileFiscalIntegrationTechnicalProfileLinesRequestBuilder<DeSerializersT> {
    return new FunctionalityProfileFiscalIntegrationTechnicalProfileLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FunctionalityProfileFiscalIntegrationTechnicalProfileLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FunctionalityProfileFiscalIntegrationTechnicalProfileLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FunctionalityProfileFiscalIntegrationTechnicalProfileLines<DeSerializersT>,
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
    typeof FunctionalityProfileFiscalIntegrationTechnicalProfileLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FunctionalityProfileFiscalIntegrationTechnicalProfileLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FUNCTIONALITY_PROFILE_ID: OrderableEdmTypeField<
      FunctionalityProfileFiscalIntegrationTechnicalProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_TECHNICAL_PROFILE_ID: OrderableEdmTypeField<
      FunctionalityProfileFiscalIntegrationTechnicalProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      FunctionalityProfileFiscalIntegrationTechnicalProfileLines<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link functionalityProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONALITY_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'FunctionalityProfileId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fiscalTechnicalProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_TECHNICAL_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'FiscalTechnicalProfileId',
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
          FunctionalityProfileFiscalIntegrationTechnicalProfileLines
        )
      };
    }

    return this._schema;
  }
}

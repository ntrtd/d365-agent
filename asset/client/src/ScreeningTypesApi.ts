/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ScreeningTypes } from './ScreeningTypes';
import { ScreeningTypesRequestBuilder } from './ScreeningTypesRequestBuilder';
import { JobPreferredScreeningsApi } from './JobPreferredScreeningsApi';
import { JobTemplateScreeningsApi } from './JobTemplateScreeningsApi';
import { HcmFrequencyGenerateFrom } from './HcmFrequencyGenerateFrom';
import { HcmFrequencyUnit } from './HcmFrequencyUnit';
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
export class ScreeningTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ScreeningTypes<DeSerializersT>, DeSerializersT>
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
  ): ScreeningTypesApi<DeSerializersT> {
    return new ScreeningTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link jobPreferredScreenings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_PREFERRED_SCREENINGS: OneToManyLink<
      ScreeningTypes<DeSerializersT>,
      DeSerializersT,
      JobPreferredScreeningsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateScreenings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_SCREENINGS: OneToManyLink<
      ScreeningTypes<DeSerializersT>,
      DeSerializersT,
      JobTemplateScreeningsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      JobPreferredScreeningsApi<DeSerializersT>,
      JobTemplateScreeningsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      JOB_PREFERRED_SCREENINGS: new OneToManyLink(
        'JobPreferredScreenings',
        this,
        linkedApis[0]
      ),
      JOB_TEMPLATE_SCREENINGS: new OneToManyLink(
        'JobTemplateScreenings',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ScreeningTypes;

  requestBuilder(): ScreeningTypesRequestBuilder<DeSerializersT> {
    return new ScreeningTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ScreeningTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ScreeningTypes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ScreeningTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ScreeningTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ScreeningTypes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SCREENING_TYPE_ID: OrderableEdmTypeField<
      ScreeningTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GENERATE_FROM: EnumField<
      ScreeningTypes<DeSerializers>,
      DeSerializersT,
      HcmFrequencyGenerateFrom,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ScreeningTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREQUENCY_UNIT: EnumField<
      ScreeningTypes<DeSerializers>,
      DeSerializersT,
      HcmFrequencyUnit,
      true,
      true
    >;
    FREQUENCY_INTERVAL: OrderableEdmTypeField<
      ScreeningTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobPreferredScreenings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_PREFERRED_SCREENINGS: OneToManyLink<
      ScreeningTypes<DeSerializersT>,
      DeSerializersT,
      JobPreferredScreeningsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateScreenings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_SCREENINGS: OneToManyLink<
      ScreeningTypes<DeSerializersT>,
      DeSerializersT,
      JobTemplateScreeningsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ScreeningTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link screeningTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCREENING_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'ScreeningTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link generateFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERATE_FROM: fieldBuilder.buildEnumField(
          'GenerateFrom',
          HcmFrequencyGenerateFrom,
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
         * Static representation of the {@link frequencyUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREQUENCY_UNIT: fieldBuilder.buildEnumField(
          'FrequencyUnit',
          HcmFrequencyUnit,
          true
        ),
        /**
         * Static representation of the {@link frequencyInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREQUENCY_INTERVAL: fieldBuilder.buildEdmTypeField(
          'FrequencyInterval',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ScreeningTypes)
      };
    }

    return this._schema;
  }
}

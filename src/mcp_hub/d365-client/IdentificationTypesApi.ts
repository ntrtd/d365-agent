/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IdentificationTypes } from './IdentificationTypes';
import { IdentificationTypesRequestBuilder } from './IdentificationTypesRequestBuilder';
import { HumanResourcesParametersApi } from './HumanResourcesParametersApi';
import { HumanResourcesSharedParametersApi } from './HumanResourcesSharedParametersApi';
import { I9DocumentTypesApi } from './I9DocumentTypesApi';
import { PersonIdentificationNumbersApi } from './PersonIdentificationNumbersApi';
import { NoYes } from './NoYes';
import { HcmIdentificationNumberAllowedValues } from './HcmIdentificationNumberAllowedValues';
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
export class IdentificationTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<IdentificationTypes<DeSerializersT>, DeSerializersT>
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
  ): IdentificationTypesApi<DeSerializersT> {
    return new IdentificationTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link humanResourcesParameters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HUMAN_RESOURCES_PARAMETERS: OneToManyLink<
      IdentificationTypes<DeSerializersT>,
      DeSerializersT,
      HumanResourcesParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personalIdentificationParameter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSONAL_IDENTIFICATION_PARAMETER: OneToManyLink<
      IdentificationTypes<DeSerializersT>,
      DeSerializersT,
      HumanResourcesSharedParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link socialSecurityNumberParameter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOCIAL_SECURITY_NUMBER_PARAMETER: OneToManyLink<
      IdentificationTypes<DeSerializersT>,
      DeSerializersT,
      HumanResourcesSharedParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link alienIdentificationParameter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALIEN_IDENTIFICATION_PARAMETER: OneToManyLink<
      IdentificationTypes<DeSerializersT>,
      DeSerializersT,
      HumanResourcesSharedParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link nationalIdentificationParameter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NATIONAL_IDENTIFICATION_PARAMETER: OneToManyLink<
      IdentificationTypes<DeSerializersT>,
      DeSerializersT,
      HumanResourcesSharedParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link i9DocumentTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_9_DOCUMENT_TYPES: OneToManyLink<
      IdentificationTypes<DeSerializersT>,
      DeSerializersT,
      I9DocumentTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personIdentificationNumbers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_IDENTIFICATION_NUMBERS: OneToManyLink<
      IdentificationTypes<DeSerializersT>,
      DeSerializersT,
      PersonIdentificationNumbersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      HumanResourcesParametersApi<DeSerializersT>,
      HumanResourcesSharedParametersApi<DeSerializersT>,
      HumanResourcesSharedParametersApi<DeSerializersT>,
      HumanResourcesSharedParametersApi<DeSerializersT>,
      HumanResourcesSharedParametersApi<DeSerializersT>,
      I9DocumentTypesApi<DeSerializersT>,
      PersonIdentificationNumbersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      HUMAN_RESOURCES_PARAMETERS: new OneToManyLink(
        'HumanResourcesParameters',
        this,
        linkedApis[0]
      ),
      PERSONAL_IDENTIFICATION_PARAMETER: new OneToManyLink(
        'PersonalIdentificationParameter',
        this,
        linkedApis[1]
      ),
      SOCIAL_SECURITY_NUMBER_PARAMETER: new OneToManyLink(
        'SocialSecurityNumberParameter',
        this,
        linkedApis[2]
      ),
      ALIEN_IDENTIFICATION_PARAMETER: new OneToManyLink(
        'AlienIdentificationParameter',
        this,
        linkedApis[3]
      ),
      NATIONAL_IDENTIFICATION_PARAMETER: new OneToManyLink(
        'NationalIdentificationParameter',
        this,
        linkedApis[4]
      ),
      I_9_DOCUMENT_TYPES: new OneToManyLink(
        'i9DocumentTypes',
        this,
        linkedApis[5]
      ),
      PERSON_IDENTIFICATION_NUMBERS: new OneToManyLink(
        'PersonIdentificationNumbers',
        this,
        linkedApis[6]
      )
    };
    return this;
  }

  entityConstructor = IdentificationTypes;

  requestBuilder(): IdentificationTypesRequestBuilder<DeSerializersT> {
    return new IdentificationTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    IdentificationTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<IdentificationTypes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    IdentificationTypes<DeSerializersT>,
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
    typeof IdentificationTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        IdentificationTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    IDENTIFICATION_TYPE_ID: OrderableEdmTypeField<
      IdentificationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIXED_LENGTH: OrderableEdmTypeField<
      IdentificationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IDENTIFICATION_NUMBER_FORMAT: OrderableEdmTypeField<
      IdentificationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_DUPLICATES: EnumField<
      IdentificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      IdentificationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOWED_VALUES: EnumField<
      IdentificationTypes<DeSerializers>,
      DeSerializersT,
      HcmIdentificationNumberAllowedValues,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link humanResourcesParameters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HUMAN_RESOURCES_PARAMETERS: OneToManyLink<
      IdentificationTypes<DeSerializersT>,
      DeSerializersT,
      HumanResourcesParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personalIdentificationParameter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSONAL_IDENTIFICATION_PARAMETER: OneToManyLink<
      IdentificationTypes<DeSerializersT>,
      DeSerializersT,
      HumanResourcesSharedParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link socialSecurityNumberParameter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOCIAL_SECURITY_NUMBER_PARAMETER: OneToManyLink<
      IdentificationTypes<DeSerializersT>,
      DeSerializersT,
      HumanResourcesSharedParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link alienIdentificationParameter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALIEN_IDENTIFICATION_PARAMETER: OneToManyLink<
      IdentificationTypes<DeSerializersT>,
      DeSerializersT,
      HumanResourcesSharedParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link nationalIdentificationParameter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NATIONAL_IDENTIFICATION_PARAMETER: OneToManyLink<
      IdentificationTypes<DeSerializersT>,
      DeSerializersT,
      HumanResourcesSharedParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link i9DocumentTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_9_DOCUMENT_TYPES: OneToManyLink<
      IdentificationTypes<DeSerializersT>,
      DeSerializersT,
      I9DocumentTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personIdentificationNumbers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_IDENTIFICATION_NUMBERS: OneToManyLink<
      IdentificationTypes<DeSerializersT>,
      DeSerializersT,
      PersonIdentificationNumbersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<IdentificationTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link identificationTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'IdentificationTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fixedLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_LENGTH: fieldBuilder.buildEdmTypeField(
          'FixedLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link identificationNumberFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION_NUMBER_FORMAT: fieldBuilder.buildEdmTypeField(
          'IdentificationNumberFormat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checkDuplicates} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_DUPLICATES: fieldBuilder.buildEnumField(
          'CheckDuplicates',
          NoYes,
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
         * Static representation of the {@link allowedValues} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWED_VALUES: fieldBuilder.buildEnumField(
          'AllowedValues',
          HcmIdentificationNumberAllowedValues,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', IdentificationTypes)
      };
    }

    return this._schema;
  }
}

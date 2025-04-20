/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobTemplateScreenings } from './JobTemplateScreenings';
import { JobTemplateScreeningsRequestBuilder } from './JobTemplateScreeningsRequestBuilder';
import { ScreeningTypesApi } from './ScreeningTypesApi';
import { JobTemplatesApi } from './JobTemplatesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class JobTemplateScreeningsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<JobTemplateScreenings<DeSerializersT>, DeSerializersT>
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
  ): JobTemplateScreeningsApi<DeSerializersT> {
    return new JobTemplateScreeningsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link screeningType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SCREENING_TYPE: OneToOneLink<
      JobTemplateScreenings<DeSerializersT>,
      DeSerializersT,
      ScreeningTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE: OneToOneLink<
      JobTemplateScreenings<DeSerializersT>,
      DeSerializersT,
      JobTemplatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ScreeningTypesApi<DeSerializersT>,
      JobTemplatesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SCREENING_TYPE: new OneToOneLink('ScreeningType', this, linkedApis[0]),
      JOB_TEMPLATE: new OneToOneLink('JobTemplate', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = JobTemplateScreenings;

  requestBuilder(): JobTemplateScreeningsRequestBuilder<DeSerializersT> {
    return new JobTemplateScreeningsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JobTemplateScreenings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<JobTemplateScreenings<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    JobTemplateScreenings<DeSerializersT>,
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
    typeof JobTemplateScreenings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        JobTemplateScreenings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_TEMPLATE_ID: OrderableEdmTypeField<
      JobTemplateScreenings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCREENING_TYPE_ID: OrderableEdmTypeField<
      JobTemplateScreenings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link screeningType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SCREENING_TYPE: OneToOneLink<
      JobTemplateScreenings<DeSerializersT>,
      DeSerializersT,
      ScreeningTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE: OneToOneLink<
      JobTemplateScreenings<DeSerializersT>,
      DeSerializersT,
      JobTemplatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<JobTemplateScreenings<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link jobTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'JobTemplateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link screeningTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCREENING_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'ScreeningTypeId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', JobTemplateScreenings)
      };
    }

    return this._schema;
  }
}

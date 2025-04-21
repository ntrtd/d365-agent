/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobTemplateResponsibilities } from './JobTemplateResponsibilities';
import { JobTemplateResponsibilitiesRequestBuilder } from './JobTemplateResponsibilitiesRequestBuilder';
import { JobTemplatesApi } from './JobTemplatesApi';
import { ResponsibilitiesApi } from './ResponsibilitiesApi';
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
export class JobTemplateResponsibilitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<JobTemplateResponsibilities<DeSerializersT>, DeSerializersT>
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
  ): JobTemplateResponsibilitiesApi<DeSerializersT> {
    return new JobTemplateResponsibilitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link jobTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE: OneToOneLink<
      JobTemplateResponsibilities<DeSerializersT>,
      DeSerializersT,
      JobTemplatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link responsibility} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESPONSIBILITY: OneToOneLink<
      JobTemplateResponsibilities<DeSerializersT>,
      DeSerializersT,
      ResponsibilitiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      JobTemplatesApi<DeSerializersT>,
      ResponsibilitiesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      JOB_TEMPLATE: new OneToOneLink('JobTemplate', this, linkedApis[0]),
      RESPONSIBILITY: new OneToOneLink('Responsibility', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = JobTemplateResponsibilities;

  requestBuilder(): JobTemplateResponsibilitiesRequestBuilder<DeSerializersT> {
    return new JobTemplateResponsibilitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JobTemplateResponsibilities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      JobTemplateResponsibilities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    JobTemplateResponsibilities<DeSerializersT>,
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
    typeof JobTemplateResponsibilities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        JobTemplateResponsibilities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_TEMPLATE_ID: OrderableEdmTypeField<
      JobTemplateResponsibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AREA_OF_RESPONSIBILITY_ID: OrderableEdmTypeField<
      JobTemplateResponsibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NOTE: OrderableEdmTypeField<
      JobTemplateResponsibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE: OneToOneLink<
      JobTemplateResponsibilities<DeSerializersT>,
      DeSerializersT,
      JobTemplatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link responsibility} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESPONSIBILITY: OneToOneLink<
      JobTemplateResponsibilities<DeSerializersT>,
      DeSerializersT,
      ResponsibilitiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<JobTemplateResponsibilities<DeSerializers>>;
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
         * Static representation of the {@link areaOfResponsibilityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AREA_OF_RESPONSIBILITY_ID: fieldBuilder.buildEdmTypeField(
          'AreaOfResponsibilityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', JobTemplateResponsibilities)
      };
    }

    return this._schema;
  }
}

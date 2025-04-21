/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobResponsibilities } from './JobResponsibilities';
import { JobResponsibilitiesRequestBuilder } from './JobResponsibilitiesRequestBuilder';
import { JobsApi } from './JobsApi';
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
export class JobResponsibilitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<JobResponsibilities<DeSerializersT>, DeSerializersT>
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
  ): JobResponsibilitiesApi<DeSerializersT> {
    return new JobResponsibilitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      JobResponsibilities<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link responsibility} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESPONSIBILITY: OneToOneLink<
      JobResponsibilities<DeSerializersT>,
      DeSerializersT,
      ResponsibilitiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [JobsApi<DeSerializersT>, ResponsibilitiesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      JOB: new OneToOneLink('Job', this, linkedApis[0]),
      RESPONSIBILITY: new OneToOneLink('Responsibility', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = JobResponsibilities;

  requestBuilder(): JobResponsibilitiesRequestBuilder<DeSerializersT> {
    return new JobResponsibilitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JobResponsibilities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<JobResponsibilities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    JobResponsibilities<DeSerializersT>,
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
    typeof JobResponsibilities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        JobResponsibilities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_ID: OrderableEdmTypeField<
      JobResponsibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AREA_OF_RESPONSIBILITY_ID: OrderableEdmTypeField<
      JobResponsibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NOTE: OrderableEdmTypeField<
      JobResponsibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      JobResponsibilities<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link responsibility} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESPONSIBILITY: OneToOneLink<
      JobResponsibilities<DeSerializersT>,
      DeSerializersT,
      ResponsibilitiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<JobResponsibilities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link jobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ID: fieldBuilder.buildEdmTypeField('JobId', 'Edm.String', false),
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
        ALL_FIELDS: new AllFields('*', JobResponsibilities)
      };
    }

    return this._schema;
  }
}

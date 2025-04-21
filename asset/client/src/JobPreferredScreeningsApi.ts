/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobPreferredScreenings } from './JobPreferredScreenings';
import { JobPreferredScreeningsRequestBuilder } from './JobPreferredScreeningsRequestBuilder';
import { JobsApi } from './JobsApi';
import { ScreeningTypesApi } from './ScreeningTypesApi';
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
export class JobPreferredScreeningsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<JobPreferredScreenings<DeSerializersT>, DeSerializersT>
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
  ): JobPreferredScreeningsApi<DeSerializersT> {
    return new JobPreferredScreeningsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      JobPreferredScreenings<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link screeningType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SCREENING_TYPE: OneToOneLink<
      JobPreferredScreenings<DeSerializersT>,
      DeSerializersT,
      ScreeningTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [JobsApi<DeSerializersT>, ScreeningTypesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      JOB: new OneToOneLink('Job', this, linkedApis[0]),
      SCREENING_TYPE: new OneToOneLink('ScreeningType', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = JobPreferredScreenings;

  requestBuilder(): JobPreferredScreeningsRequestBuilder<DeSerializersT> {
    return new JobPreferredScreeningsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JobPreferredScreenings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      JobPreferredScreenings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    JobPreferredScreenings<DeSerializersT>,
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
    typeof JobPreferredScreenings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        JobPreferredScreenings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_ID: OrderableEdmTypeField<
      JobPreferredScreenings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCREENING_TYPE_ID: OrderableEdmTypeField<
      JobPreferredScreenings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      JobPreferredScreenings<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link screeningType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SCREENING_TYPE: OneToOneLink<
      JobPreferredScreenings<DeSerializersT>,
      DeSerializersT,
      ScreeningTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<JobPreferredScreenings<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', JobPreferredScreenings)
      };
    }

    return this._schema;
  }
}

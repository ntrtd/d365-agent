/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobFamilies } from './JobFamilies';
import { JobFamiliesRequestBuilder } from './JobFamiliesRequestBuilder';
import { PayIntV1HcmPositionDetailsApi } from './PayIntV1HcmPositionDetailsApi';
import { PositionDetailsApi } from './PositionDetailsApi';
import { JobsApi } from './JobsApi';
import { PayIntV1JobDetailsApi } from './PayIntV1JobDetailsApi';
import { JobDetailsApi } from './JobDetailsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class JobFamiliesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<JobFamilies<DeSerializersT>, DeSerializersT>
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
  ): JobFamiliesApi<DeSerializersT> {
    return new JobFamiliesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link payIntPositionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_POSITION_DETAILS: OneToManyLink<
      JobFamilies<DeSerializersT>,
      DeSerializersT,
      PayIntV1HcmPositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_DETAILS: OneToManyLink<
      JobFamilies<DeSerializersT>,
      DeSerializersT,
      PositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOBS: OneToManyLink<
      JobFamilies<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_DETAILS: OneToManyLink<
      JobFamilies<DeSerializersT>,
      DeSerializersT,
      PayIntV1JobDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link details} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DETAILS: OneToManyLink<
      JobFamilies<DeSerializersT>,
      DeSerializersT,
      JobDetailsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PayIntV1HcmPositionDetailsApi<DeSerializersT>,
      PositionDetailsApi<DeSerializersT>,
      JobsApi<DeSerializersT>,
      PayIntV1JobDetailsApi<DeSerializersT>,
      JobDetailsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PAY_INT_POSITION_DETAILS: new OneToManyLink(
        'PayIntPositionDetails',
        this,
        linkedApis[0]
      ),
      POSITION_DETAILS: new OneToManyLink(
        'PositionDetails',
        this,
        linkedApis[1]
      ),
      JOBS: new OneToManyLink('Jobs', this, linkedApis[2]),
      PAY_INT_DETAILS: new OneToManyLink('PayIntDetails', this, linkedApis[3]),
      DETAILS: new OneToManyLink('Details', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = JobFamilies;

  requestBuilder(): JobFamiliesRequestBuilder<DeSerializersT> {
    return new JobFamiliesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JobFamilies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<JobFamilies<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<JobFamilies<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof JobFamilies, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(JobFamilies, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_FAMILY_ID: OrderableEdmTypeField<
      JobFamilies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      JobFamilies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntPositionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_POSITION_DETAILS: OneToManyLink<
      JobFamilies<DeSerializersT>,
      DeSerializersT,
      PayIntV1HcmPositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_DETAILS: OneToManyLink<
      JobFamilies<DeSerializersT>,
      DeSerializersT,
      PositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOBS: OneToManyLink<
      JobFamilies<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_DETAILS: OneToManyLink<
      JobFamilies<DeSerializersT>,
      DeSerializersT,
      PayIntV1JobDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link details} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DETAILS: OneToManyLink<
      JobFamilies<DeSerializersT>,
      DeSerializersT,
      JobDetailsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<JobFamilies<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link jobFamilyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_FAMILY_ID: fieldBuilder.buildEdmTypeField(
          'JobFamilyId',
          'Edm.String',
          false
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', JobFamilies)
      };
    }

    return this._schema;
  }
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkerTaxCodes } from './WorkerTaxCodes';
import { WorkerTaxCodesRequestBuilder } from './WorkerTaxCodesRequestBuilder';
import { WorkersApi } from './WorkersApi';
import { WorkerTaxCodeParametersApi } from './WorkerTaxCodeParametersApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class WorkerTaxCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WorkerTaxCodes<DeSerializersT>, DeSerializersT>
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
  ): WorkerTaxCodesApi<DeSerializersT> {
    return new WorkerTaxCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      WorkerTaxCodes<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerTaxCodeParameters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_TAX_CODE_PARAMETERS: OneToManyLink<
      WorkerTaxCodes<DeSerializersT>,
      DeSerializersT,
      WorkerTaxCodeParametersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WorkersApi<DeSerializersT>,
      WorkerTaxCodeParametersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WORKER: new OneToOneLink('Worker', this, linkedApis[0]),
      WORKER_TAX_CODE_PARAMETERS: new OneToManyLink(
        'WorkerTaxCodeParameters',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = WorkerTaxCodes;

  requestBuilder(): WorkerTaxCodesRequestBuilder<DeSerializersT> {
    return new WorkerTaxCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkerTaxCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WorkerTaxCodes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<WorkerTaxCodes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof WorkerTaxCodes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(WorkerTaxCodes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      WorkerTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_CODE_ID: OrderableEdmTypeField<
      WorkerTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      WorkerTaxCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      WorkerTaxCodes<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerTaxCodeParameters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_TAX_CODE_PARAMETERS: OneToManyLink<
      WorkerTaxCodes<DeSerializersT>,
      DeSerializersT,
      WorkerTaxCodeParametersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WorkerTaxCodes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taxCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE_ID: fieldBuilder.buildEdmTypeField(
          'TaxCodeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkerTaxCodes)
      };
    }

    return this._schema;
  }
}

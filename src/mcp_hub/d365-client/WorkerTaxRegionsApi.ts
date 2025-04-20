/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkerTaxRegions } from './WorkerTaxRegions';
import { WorkerTaxRegionsRequestBuilder } from './WorkerTaxRegionsRequestBuilder';
import { WorkersApi } from './WorkersApi';
import { TaxRegionsApi } from './TaxRegionsApi';
import { PositionWorkerDefaultTaxRgnsApi } from './PositionWorkerDefaultTaxRgnsApi';
import { WorkerResidentTaxRegionsApi } from './WorkerResidentTaxRegionsApi';
import { PayStatementEarningLinesApi } from './PayStatementEarningLinesApi';
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
export class WorkerTaxRegionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WorkerTaxRegions<DeSerializersT>, DeSerializersT>
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
  ): WorkerTaxRegionsApi<DeSerializersT> {
    return new WorkerTaxRegionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      WorkerTaxRegions<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_REGION: OneToOneLink<
      WorkerTaxRegions<DeSerializersT>,
      DeSerializersT,
      TaxRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionWorkerDefaultTaxRgn} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_WORKER_DEFAULT_TAX_RGN: OneToManyLink<
      WorkerTaxRegions<DeSerializersT>,
      DeSerializersT,
      PositionWorkerDefaultTaxRgnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerResidentTaxRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_RESIDENT_TAX_REGION: OneToManyLink<
      WorkerTaxRegions<DeSerializersT>,
      DeSerializersT,
      WorkerResidentTaxRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payStatementEarningLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_EARNING_LINE: OneToManyLink<
      WorkerTaxRegions<DeSerializersT>,
      DeSerializersT,
      PayStatementEarningLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WorkersApi<DeSerializersT>,
      TaxRegionsApi<DeSerializersT>,
      PositionWorkerDefaultTaxRgnsApi<DeSerializersT>,
      WorkerResidentTaxRegionsApi<DeSerializersT>,
      PayStatementEarningLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WORKER: new OneToOneLink('Worker', this, linkedApis[0]),
      TAX_REGION: new OneToOneLink('TaxRegion', this, linkedApis[1]),
      POSITION_WORKER_DEFAULT_TAX_RGN: new OneToManyLink(
        'PositionWorkerDefaultTaxRgn',
        this,
        linkedApis[2]
      ),
      WORKER_RESIDENT_TAX_REGION: new OneToManyLink(
        'WorkerResidentTaxRegion',
        this,
        linkedApis[3]
      ),
      PAY_STATEMENT_EARNING_LINE: new OneToManyLink(
        'PayStatementEarningLine',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = WorkerTaxRegions;

  requestBuilder(): WorkerTaxRegionsRequestBuilder<DeSerializersT> {
    return new WorkerTaxRegionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkerTaxRegions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WorkerTaxRegions<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<WorkerTaxRegions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof WorkerTaxRegions, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WorkerTaxRegions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      WorkerTaxRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOCATION_ID: OrderableEdmTypeField<
      WorkerTaxRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_RESIDENT: OrderableEdmTypeField<
      WorkerTaxRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POLITICAL_SUB_DIVISION_ID: OrderableEdmTypeField<
      WorkerTaxRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MUNICIPALITY_ID: OrderableEdmTypeField<
      WorkerTaxRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHOOL_DISTRICT_ID: OrderableEdmTypeField<
      WorkerTaxRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      WorkerTaxRegions<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_REGION: OneToOneLink<
      WorkerTaxRegions<DeSerializersT>,
      DeSerializersT,
      TaxRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionWorkerDefaultTaxRgn} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_WORKER_DEFAULT_TAX_RGN: OneToManyLink<
      WorkerTaxRegions<DeSerializersT>,
      DeSerializersT,
      PositionWorkerDefaultTaxRgnsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerResidentTaxRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_RESIDENT_TAX_REGION: OneToManyLink<
      WorkerTaxRegions<DeSerializersT>,
      DeSerializersT,
      WorkerResidentTaxRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payStatementEarningLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_EARNING_LINE: OneToManyLink<
      WorkerTaxRegions<DeSerializersT>,
      DeSerializersT,
      PayStatementEarningLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WorkerTaxRegions<DeSerializers>>;
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
         * Static representation of the {@link locationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'LocationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isResident} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RESIDENT: fieldBuilder.buildEdmTypeField(
          'IsResident',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link politicalSubDivisionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLITICAL_SUB_DIVISION_ID: fieldBuilder.buildEdmTypeField(
          'PoliticalSubDivisionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link municipalityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MUNICIPALITY_ID: fieldBuilder.buildEdmTypeField(
          'MunicipalityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link schoolDistrictId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHOOL_DISTRICT_ID: fieldBuilder.buildEdmTypeField(
          'SchoolDistrictId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkerTaxRegions)
      };
    }

    return this._schema;
  }
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InjuryFilingAgencies } from './InjuryFilingAgencies';
import { InjuryFilingAgenciesRequestBuilder } from './InjuryFilingAgenciesRequestBuilder';
import { InjuryIncidentFilingAgenciesApi } from './InjuryIncidentFilingAgenciesApi';
import { NoYes } from './NoYes';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class InjuryFilingAgenciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InjuryFilingAgencies<DeSerializersT>, DeSerializersT>
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
  ): InjuryFilingAgenciesApi<DeSerializersT> {
    return new InjuryFilingAgenciesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link injuryIncidentFilingAgency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_INCIDENT_FILING_AGENCY: OneToOneLink<
      InjuryFilingAgencies<DeSerializersT>,
      DeSerializersT,
      InjuryIncidentFilingAgenciesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [InjuryIncidentFilingAgenciesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      INJURY_INCIDENT_FILING_AGENCY: new OneToOneLink(
        'InjuryIncidentFilingAgency',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = InjuryFilingAgencies;

  requestBuilder(): InjuryFilingAgenciesRequestBuilder<DeSerializersT> {
    return new InjuryFilingAgenciesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InjuryFilingAgencies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InjuryFilingAgencies<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InjuryFilingAgencies<DeSerializersT>,
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
    typeof InjuryFilingAgencies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InjuryFilingAgencies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FILING_AGENCY_ID: OrderableEdmTypeField<
      InjuryFilingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      InjuryFilingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT: EnumField<
      InjuryFilingAgencies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link injuryIncidentFilingAgency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_INCIDENT_FILING_AGENCY: OneToOneLink<
      InjuryFilingAgencies<DeSerializersT>,
      DeSerializersT,
      InjuryIncidentFilingAgenciesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InjuryFilingAgencies<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link filingAgencyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILING_AGENCY_ID: fieldBuilder.buildEdmTypeField(
          'FilingAgencyId',
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
        /**
         * Static representation of the {@link default} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT: fieldBuilder.buildEnumField('Default', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InjuryFilingAgencies)
      };
    }

    return this._schema;
  }
}

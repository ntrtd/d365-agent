/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreditManagementRiskGroups } from './CreditManagementRiskGroups';
import { CreditManagementRiskGroupsRequestBuilder } from './CreditManagementRiskGroupsRequestBuilder';
import { CredManRiskGroupIndicator } from './CredManRiskGroupIndicator';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class CreditManagementRiskGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CreditManagementRiskGroups<DeSerializersT>, DeSerializersT>
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
  ): CreditManagementRiskGroupsApi<DeSerializersT> {
    return new CreditManagementRiskGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CreditManagementRiskGroups;

  requestBuilder(): CreditManagementRiskGroupsRequestBuilder<DeSerializersT> {
    return new CreditManagementRiskGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CreditManagementRiskGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CreditManagementRiskGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CreditManagementRiskGroups<DeSerializersT>,
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
    typeof CreditManagementRiskGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CreditManagementRiskGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CreditManagementRiskGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RISK_GROUP_ID: OrderableEdmTypeField<
      CreditManagementRiskGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RISK_GROUP_INDICATOR: EnumField<
      CreditManagementRiskGroups<DeSerializers>,
      DeSerializersT,
      CredManRiskGroupIndicator,
      true,
      true
    >;
    PERCENT_TO: OrderableEdmTypeField<
      CreditManagementRiskGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERCENT_FROM: OrderableEdmTypeField<
      CreditManagementRiskGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CreditManagementRiskGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CreditManagementRiskGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link riskGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RISK_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'RiskGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link riskGroupIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RISK_GROUP_INDICATOR: fieldBuilder.buildEnumField(
          'RiskGroupIndicator',
          CredManRiskGroupIndicator,
          true
        ),
        /**
         * Static representation of the {@link percentTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT_TO: fieldBuilder.buildEdmTypeField(
          'PercentTo',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link percentFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT_FROM: fieldBuilder.buildEdmTypeField(
          'PercentFrom',
          'Edm.Decimal',
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
        ALL_FIELDS: new AllFields('*', CreditManagementRiskGroups)
      };
    }

    return this._schema;
  }
}

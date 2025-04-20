/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RiskScoreGroups } from './RiskScoreGroups';
import { RiskScoreGroupsRequestBuilder } from './RiskScoreGroupsRequestBuilder';
import { CredManRiskScoreType } from './CredManRiskScoreType';
import { CredManRiskGroupType } from './CredManRiskGroupType';
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
export class RiskScoreGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RiskScoreGroups<DeSerializersT>, DeSerializersT>
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
  ): RiskScoreGroupsApi<DeSerializersT> {
    return new RiskScoreGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RiskScoreGroups;

  requestBuilder(): RiskScoreGroupsRequestBuilder<DeSerializersT> {
    return new RiskScoreGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RiskScoreGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RiskScoreGroups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RiskScoreGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RiskScoreGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RiskScoreGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RiskScoreGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_ID: OrderableEdmTypeField<
      RiskScoreGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RISK_SCORE_TYPE: EnumField<
      RiskScoreGroups<DeSerializers>,
      DeSerializersT,
      CredManRiskScoreType,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RiskScoreGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROUP_TYPE: EnumField<
      RiskScoreGroups<DeSerializers>,
      DeSerializersT,
      CredManRiskGroupType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RiskScoreGroups<DeSerializers>>;
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
         * Static representation of the {@link groupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_ID: fieldBuilder.buildEdmTypeField(
          'GroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link riskScoreType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RISK_SCORE_TYPE: fieldBuilder.buildEnumField(
          'RiskScoreType',
          CredManRiskScoreType,
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
         * Static representation of the {@link groupType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_TYPE: fieldBuilder.buildEnumField(
          'GroupType',
          CredManRiskGroupType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RiskScoreGroups)
      };
    }

    return this._schema;
  }
}

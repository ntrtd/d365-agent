/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AbsenceCodeGroups } from './AbsenceCodeGroups';
import { AbsenceCodeGroupsRequestBuilder } from './AbsenceCodeGroupsRequestBuilder';
import { AbsenceCodesApi } from './AbsenceCodesApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class AbsenceCodeGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AbsenceCodeGroups<DeSerializersT>, DeSerializersT>
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
  ): AbsenceCodeGroupsApi<DeSerializersT> {
    return new AbsenceCodeGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link absenceCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ABSENCE_CODE: OneToManyLink<
      AbsenceCodeGroups<DeSerializersT>,
      DeSerializersT,
      AbsenceCodesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [AbsenceCodesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ABSENCE_CODE: new OneToManyLink('AbsenceCode', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = AbsenceCodeGroups;

  requestBuilder(): AbsenceCodeGroupsRequestBuilder<DeSerializersT> {
    return new AbsenceCodeGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AbsenceCodeGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AbsenceCodeGroups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AbsenceCodeGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof AbsenceCodeGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AbsenceCodeGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AbsenceCodeGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ABSENCE_GROUP: OrderableEdmTypeField<
      AbsenceCodeGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AbsenceCodeGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ICON: OrderableEdmTypeField<
      AbsenceCodeGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEDUCT_OVERTIME: EnumField<
      AbsenceCodeGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    JOB_IDENTIFICATION: OrderableEdmTypeField<
      AbsenceCodeGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTRATION: EnumField<
      AbsenceCodeGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REDUCE_FLEX: EnumField<
      AbsenceCodeGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link absenceCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ABSENCE_CODE: OneToManyLink<
      AbsenceCodeGroups<DeSerializersT>,
      DeSerializersT,
      AbsenceCodesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AbsenceCodeGroups<DeSerializers>>;
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
         * Static representation of the {@link absenceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABSENCE_GROUP: fieldBuilder.buildEdmTypeField(
          'AbsenceGroup',
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
         * Static representation of the {@link icon} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ICON: fieldBuilder.buildEdmTypeField('Icon', 'Edm.Int32', false),
        /**
         * Static representation of the {@link deductOvertime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCT_OVERTIME: fieldBuilder.buildEnumField(
          'DeductOvertime',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link jobIdentification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_IDENTIFICATION: fieldBuilder.buildEdmTypeField(
          'JobIdentification',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link registration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION: fieldBuilder.buildEnumField('Registration', NoYes, true),
        /**
         * Static representation of the {@link reduceFlex} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REDUCE_FLEX: fieldBuilder.buildEnumField('ReduceFlex', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AbsenceCodeGroups)
      };
    }

    return this._schema;
  }
}

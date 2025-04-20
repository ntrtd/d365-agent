/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AbsenceCodes } from './AbsenceCodes';
import { AbsenceCodesRequestBuilder } from './AbsenceCodesRequestBuilder';
import { AbsenceReasonsApi } from './AbsenceReasonsApi';
import { AbsenceCodeGroupsApi } from './AbsenceCodeGroupsApi';
import { JmgAbsenceMethodEnum } from './JmgAbsenceMethodEnum';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AbsenceCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AbsenceCodes<DeSerializersT>, DeSerializersT>
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
  ): AbsenceCodesApi<DeSerializersT> {
    return new AbsenceCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link absenceReason} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ABSENCE_REASON: OneToManyLink<
      AbsenceCodes<DeSerializersT>,
      DeSerializersT,
      AbsenceReasonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link absenceGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ABSENCE_GROUPS: OneToOneLink<
      AbsenceCodes<DeSerializersT>,
      DeSerializersT,
      AbsenceCodeGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AbsenceReasonsApi<DeSerializersT>,
      AbsenceCodeGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ABSENCE_REASON: new OneToManyLink('AbsenceReason', this, linkedApis[0]),
      ABSENCE_GROUPS: new OneToOneLink('AbsenceGroups', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = AbsenceCodes;

  requestBuilder(): AbsenceCodesRequestBuilder<DeSerializersT> {
    return new AbsenceCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AbsenceCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AbsenceCodes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AbsenceCodes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AbsenceCodes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(AbsenceCodes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AbsenceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ABSENCE_CODE: OrderableEdmTypeField<
      AbsenceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEXT_COLOR: OrderableEdmTypeField<
      AbsenceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BACKGROUND_COLOR: OrderableEdmTypeField<
      AbsenceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ABSENCE_GROUP: OrderableEdmTypeField<
      AbsenceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AbsenceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      AbsenceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLUMN: OrderableEdmTypeField<
      AbsenceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PAY_TYPE: OrderableEdmTypeField<
      AbsenceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    METHOD: EnumField<
      AbsenceCodes<DeSerializers>,
      DeSerializersT,
      JmgAbsenceMethodEnum,
      true,
      true
    >;
    INCLUDE_IN_REPORT: EnumField<
      AbsenceCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ICON: OrderableEdmTypeField<
      AbsenceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    OFFSET_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      AbsenceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LETTER_CODE: OrderableEdmTypeField<
      AbsenceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_IDENTIFICATION: OrderableEdmTypeField<
      AbsenceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTRATION: EnumField<
      AbsenceCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      AbsenceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTINUE_ABSENCE: EnumField<
      AbsenceCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DAYS: OrderableEdmTypeField<
      AbsenceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link absenceReason} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ABSENCE_REASON: OneToManyLink<
      AbsenceCodes<DeSerializersT>,
      DeSerializersT,
      AbsenceReasonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link absenceGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ABSENCE_GROUPS: OneToOneLink<
      AbsenceCodes<DeSerializersT>,
      DeSerializersT,
      AbsenceCodeGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AbsenceCodes<DeSerializers>>;
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
         * Static representation of the {@link absenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABSENCE_CODE: fieldBuilder.buildEdmTypeField(
          'AbsenceCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link textColor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT_COLOR: fieldBuilder.buildEdmTypeField(
          'TextColor',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link backgroundColor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BACKGROUND_COLOR: fieldBuilder.buildEdmTypeField(
          'BackgroundColor',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link absenceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABSENCE_GROUP: fieldBuilder.buildEdmTypeField(
          'AbsenceGroup',
          'Edm.String',
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
         * Static representation of the {@link mainAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'MainAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link column} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLUMN: fieldBuilder.buildEdmTypeField('Column', 'Edm.Int32', false),
        /**
         * Static representation of the {@link payType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_TYPE: fieldBuilder.buildEdmTypeField('PayType', 'Edm.String', true),
        /**
         * Static representation of the {@link method} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        METHOD: fieldBuilder.buildEnumField(
          'Method',
          JmgAbsenceMethodEnum,
          true
        ),
        /**
         * Static representation of the {@link includeInReport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_IN_REPORT: fieldBuilder.buildEnumField(
          'IncludeInReport',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link icon} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ICON: fieldBuilder.buildEdmTypeField('Icon', 'Edm.Int32', false),
        /**
         * Static representation of the {@link offsetAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OffsetAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link letterCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LETTER_CODE: fieldBuilder.buildEdmTypeField(
          'LetterCode',
          'Edm.String',
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
         * Static representation of the {@link dimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link continueAbsence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTINUE_ABSENCE: fieldBuilder.buildEnumField(
          'ContinueAbsence',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link days} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAYS: fieldBuilder.buildEdmTypeField('Days', 'Edm.Decimal', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AbsenceCodes)
      };
    }

    return this._schema;
  }
}
